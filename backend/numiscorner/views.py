from django.shortcuts import render
from rest_framework import viewsets, permissions, serializers, status
from numiscorner.serializers import CoinSerializer, ImageSerializer, CoinFileUploadSerializer
from numiscorner.models import Coin, Image
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
import pandas as pd
import PIL
import requests
import io
import numpy

def download_images(image_urls: list[str], image_name: str):
    result = []

    image_name_o = str(image_name) + '_o.jpg'
    image_name_r = str(image_name) + '_r.jpg'

    for url in image_urls:
        r = requests.get(url)

        if r.status_code != requests.codes.ok:
            return []
        else:
            image_name = image_name_o

            if image_urls.index(url) == 1:
                image_name = image_name_r

            with PIL.Image.open(io.BytesIO(r.content)) as image:
                save_path = 'media/numiscorner/' + image_name
                image.save(save_path, 'JPEG')
                result.append(save_path.split('/',1)[1])

    return result



class CoinViewSet(viewsets.ModelViewSet):
    queryset = Coin.objects.all()
    serializer_class = CoinSerializer
    permission_classes = [permissions.AllowAny]

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.AllowAny]

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
            skipped_rows.append(index_label + 1)
        
    return Response(data={'message': 'data uploaded successfully', 'skipped_rows': skipped_rows})