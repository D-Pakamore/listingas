from rest_framework import serializers
from numiscorner.models import Coin, Image

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        image_fields = [field.name for field in Image._meta.get_fields()]
        model = Image
        fields = image_fields

class CoinSerializer(serializers.HyperlinkedModelSerializer):
    image_set = ImageSerializer(read_only=True, many=True)
    class Meta:
        coin_fields = [field.name for field in Coin._meta.get_fields()][1:]
        model = Coin
        fields = coin_fields + ['image_set']

class CoinFileUploadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        coin_fields = [field.name for field in Coin._meta.get_fields()][2:-2]
        model = Coin
        fields = coin_fields

        


