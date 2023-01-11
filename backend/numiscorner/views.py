from django.shortcuts import render
from rest_framework import viewsets, permissions, serializers, status
from numiscorner.serializers import CoinSerializer, ImageSerializer, CoinFileUploadSerializer
from numiscorner.models import Coin, Image
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
import pandas as pd
import PIL
from PIL import ImageFile
import requests
import io
import numpy
import random
import json
from django.core import serializers

# prevents PIL error: OSError: image file is truncated (2 bytes not processed)
ImageFile.LOAD_TRUNCATED_IMAGES = True

class AllResultsPagination(PageNumberPagination):
    page_size = 10000
    page_size_query_param = 'page_size'
    max_page_size = 10000



def save_image(image: bytes, image_name: str) -> list[str]:
    # path to image excluding default media folder "numiscorner/image_name.png"
    image_name = image_name.replace(" ", "_")

    image_save_path = 'media/numiscorner/' + image_name
    path_to_image = image_save_path.split('/',1)[1]

    pictogram_save_path = 'media/numiscorner/pictograms/' + image_name
    path_to_pictogram = pictogram_save_path.split('/',1)[1]

    with PIL.Image.open(image) as image:
        image.save(image_save_path, 'PNG')

        pictogram = image.resize((100,100))
        pictogram.save(pictogram_save_path, 'PNG')
        
    return [path_to_image, path_to_pictogram]

def download_images(image_urls: list[str], image_name: str) -> list[list[str]]:
    """saves images to numiscorner images location and returns paths = numiscorner/image_name.png"""
    result = []

    for url in image_urls:
        random_number = str(random.randint(1000, 10000000))
        extension = ".png"
        current_image_name = str(image_name) + random_number + extension
        r = requests.get(url)

        if r.status_code == requests.codes.ok:

            path_to_image_and_pictogram = save_image(io.BytesIO(r.content), current_image_name)

            result.append(path_to_image_and_pictogram)

    return result

def get_files_from_request(FILES):
    result = []

    for file in FILES:
        result.append(file)

    return result    


class CoinViewSet(viewsets.ModelViewSet):
    queryset = Coin.objects.all()
    serializer_class = CoinSerializer
    permission_classes = [permissions.IsAuthenticated]

class CoinWithoutPaginationViewSet(viewsets.ModelViewSet):
    queryset = Coin.objects.all()
    serializer_class = CoinSerializer
    permission_classes = [permissions.IsAuthenticated]  
    pagination_class = AllResultsPagination

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, **kwargs):
        coin_id = request.data['id']
        images = get_files_from_request(request.FILES.getlist('files[]'))

        coin = Coin.objects.get(id=coin_id)

        # itterate image pairs by 2
        for i in range(len(images)):
            image = images[i]

            #saving to local storage
            random_number = str(random.randint(1000, 10000000))
            image_name = random_number + '_' + image.name

            path_to_image_and_pictogram = save_image(image.file, image_name)
            path_to_image = path_to_image_and_pictogram[0]
            path_to_pictogram = path_to_image_and_pictogram[1]
            #query descending order image objects and take the highest order plus one
            order_number = Image.objects.all().order_by('-order').values()[0]['order'] + 1

            create_image = Image(coin_id = coin,
                image = path_to_image,
                pictogram = path_to_pictogram,
                order = order_number
            )
            create_image.save()



        return Response(data={'message': f'data uploaded successfully, images uploaded: {len(images)}', 'type': 'success'})


@api_view(['POST'])
def create_coin(request):
    csv_file = request.data['data']
    df = pd.read_csv(csv_file)
    df = df.replace('', 'lul').fillna(numpy.nan).replace(numpy.nan, None)
    required_columns = [field.name for field in Coin._meta.get_fields()][2:-2] + ['obverse_image', 'reverse_image']
    missing_columns = []
    skipped_rows = []

    # check if all required columns are in user given file
    for required_header in required_columns:

        if not required_header in df.columns:
            missing_columns.append(required_header)

    if len(missing_columns) != 0:
        column_names = ', '.join(missing_columns)
        message_type = "warning"
        return Response(data={'message': f'none of the rows were uploaded, your csv file is missing required columns: {column_names}', 'type': {message_type}})

    for (index_label, row_series) in df.iterrows():
        data = {**row_series}
        #extracting image urls
        image_urls = [data['obverse_image'], data['reverse_image']]
        data.pop('obverse_image')
        data.pop('reverse_image')

        print(data)

        serializer = CoinFileUploadSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            # downloading images from given urls
            images: list = download_images(image_urls, data['numiscorner_id'])

            # attaching image for new coin instance
            latest_coin = Coin.objects.all().order_by('-id')[0]

            for i in range(len(images)):
                #query descending order image objects and take the highest order plus one
                try:
                    order_number = Image.objects.all().order_by('-order').values()[0]['order'] + 1
                except IndexError:
                    order_number = 1 

                coin_image = Image(
                    coin_id = latest_coin, 
                    image_url = image_urls[i], 
                    image = images[i][0],
                    pictogram =  images[i][1],
                    order = order_number
                )
                coin_image.save()
        else:
            skipped_rows.append(str(index_label + 1))

    skipped_rows = ', '.join(skipped_rows)
    skipped_rows = 'none' if len(skipped_rows) == 0 else skipped_rows
    message_type = "success"
        
    return Response(data={'message': f'data uploaded successfully, skipped rows: {skipped_rows}', 'type': {message_type}})

@api_view(['POST'])
def change_image_order(request):
    data = request.data['data']
    
    
    for image_dict in data:
        img_id = image_dict['id']
        img_order = image_dict['order']

        image = Image.objects.get(id=img_id)
        image.order = img_order
        image.save()

    return Response(data={'message': f'data uploaded successfully, skipped rows:', 'type': 'success'})

@api_view(['GET'])
def get_all_coins(request):
    
    coins = Coin.objects.all()
    # coins_json = serializers.serialize('json', coins)
    serializer = CoinSerializer(coins)
    print(serializer)

    return Response(data=serializer)