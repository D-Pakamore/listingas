from django.shortcuts import render
from rest_framework import viewsets, permissions, serializers, status
from numiscorner.serializers import CoinSerializer, ImageSerializer
from numiscorner.models import Coin, Image
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


class CoinViewSet(viewsets.ModelViewSet):
    queryset = Coin.objects.all()
    serializer_class = CoinSerializer
    permission_classes = [permissions.IsAuthenticated]

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

@api_view(['POST'])
def create_coin(request):
    serializer = CoinSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)    