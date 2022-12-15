from django.shortcuts import render
from rest_framework import viewsets, permissions, serializers, status
from numiscorner.serializers import CoinSerializer, ImageSerializer, CoinFileUploadSerializer
from numiscorner.models import Coin, Image
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
import pandas as pd
import PIL
import requests
import io
import numpy
import random

def save_image(image: bytes, image_name: str) -> str | None:
    """-> path to image | None"""
    # path to image excluding default media folder "numiscorner/image_name.png"
    path_to_image = None
    print(image_name)
    image_name = image_name.replace(" ", "_")

    with PIL.Image.open(image) as image:
        save_path = 'media/numiscorner/' + image_name
        image.save(save_path, 'PNG')
        path_to_image = save_path.split('/',1)[1]

    return path_to_image

def download_images(image_urls: list[str], image_name: str) -> list[str]:
    """saves images to numiscorner images location and returns paths = numiscorner/image_name.png"""
    result = []

    image_name_o = str(image_name) + '_o.png'
    image_name_r = str(image_name) + '_r.png'

    for url in image_urls:
        r = requests.get(url)

        if r.status_code != requests.codes.ok:
            return []
        else:
            image_name = image_name_o

            if image_urls.index(url) == 1:
                image_name = image_name_r

            path_to_image = save_image(io.BytesIO(r.content), image_name)
            result.append(path_to_image)

    return result

def get_files_from_request(FILES):
    result = []

    for file in FILES:
        result.append(file)

    return result    


class CoinViewSet(viewsets.ModelViewSet):
    queryset = Coin.objects.all()
    serializer_class = CoinSerializer
    permission_classes = [permissions.AllowAny]

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.AllowAny]

    # @action(detail=True, methods=['post'])
    def create(self, request, **kwargs):
        coin_id = request.data['id']
        images = get_files_from_request(request.FILES.getlist('files[]'))

        coin = Coin.objects.get(id=coin_id)
        
        # images must be in pairs of 2
        if len(images) % 2 != 0:
            return Response(data={'message': f'images must be in pairs by two, images given: {len(images)}', 'type': 'fail'})

        # itterate image pairs by 2
        for i in range(0, int(len(images)), 2):
            obverse_image = images[i]
            reverse_image = images[i + 1]

            #saving to local storage
            random_number = str(random.randint(1000, 10000000))
            first_image_name = random_number + '_' + obverse_image.name
            second_image_name = random_number + '_' + reverse_image.name

            obverse_image_path = save_image(obverse_image.file, first_image_name)
            reverse_image_path = save_image(reverse_image.file, second_image_name)

            create_image = Image(coin = coin,
                obverse_image = obverse_image_path, 
                reverse_image = reverse_image_path
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
        return Response(data="""Your csv file is missing required columns: {0}""".format(column_names))

    for (index_label, row_series) in df.iterrows():
        data = {**row_series}
        #extracting image urls
        image_urls = [data['obverse_image'], data['reverse_image']]
        data.pop('obverse_image')
        data.pop('reverse_image')

        images: list = download_images(image_urls, data['numiscorner_id'])

        serializer = CoinFileUploadSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()

            # attaching image for new coin instance
            latest_coin = Coin.objects.all().order_by('-id')[0]

            if len(images) != 0:
                default_image = Image(coin = latest_coin, 
                obverse_image_url = image_urls[0], 
                reverse_image_url = image_urls[1], 
                obverse_image = images[0], 
                reverse_image = images[1]
                )
            else:
                default_image = Image(coin=latest_coin)

            default_image.save()
        else:
            skipped_rows.append(str(index_label + 1))

    skipped_rows = ', '.join(skipped_rows)    
        
    return Response(data={'message': f'data uploaded successfully, skipped rows: {skipped_rows}', 'type': 'success'})

# @api_view(['GET'])
# def getCoinImages(request):
