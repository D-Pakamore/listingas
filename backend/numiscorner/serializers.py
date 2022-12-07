from rest_framework import serializers
from numiscorner.models import Coin, Image

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class CoinSerializer(serializers.HyperlinkedModelSerializer):
    image_set = ImageSerializer(read_only=True, many=True)
    class Meta:
        coin_fields = [field.name for field in Coin._meta.get_fields()][1:]
        print(coin_fields)
        model = Coin
        fields = coin_fields + ['image_set']

class CoinFileUploadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        coin_fields = [field.name for field in Coin._meta.get_fields()][2:-2]
        model = Coin
        fields = coin_fields

        


