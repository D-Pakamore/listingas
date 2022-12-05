from django.shortcuts import render
from rest_framework import viewsets, permissions, serializers, status
from numiscorner.serializers import CoinSerializer, ImageSerializer, CoinFileUploadSerializer
from numiscorner.models import Coin, Image
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
import pandas as pd


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
    required_columns = [field.name for field in Coin._meta.get_fields()][2:-2]
    missing_columns = []

    # check if all required columns are in user given file
    for required_header in required_columns:

        if not required_header in df.columns:
            missing_columns.append(required_header)

    if len(missing_columns) != 0:
        column_names = ', '.join(missing_columns)
        return Response(data="""Your csv file is missing required columns: {0}""".format(column_names))

    # paduodant csv failą iš fronto pusės (/numiscorner end point) veikia tik jeigu faile yra viena eilutė
    # kai užsukam for ciklą su daugiau nei 1 row gauname 400 status code
    # prisijungimai: admin admin, csv failas: root directory prie frontend backend folderių 'numiscorner_template.csv'
    for (index_label, row_series) in df.iterrows():
        data = {**row_series}
        serializer = CoinFileUploadSerializer(data=data)
        
        serializer.is_valid(raise_exception=True)
        serializer.save()

        # attaching default image for new coin instance
        latest_coin = Coin.objects.all().order_by('-id')[0]
        default_image = Image(coin=latest_coin)
        default_image.save()
        
    return Response(data='csv file upload succesful !')