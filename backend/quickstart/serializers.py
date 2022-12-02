from rest_framework import serializers
from quickstart.models import InformationBoard
from django.contrib.auth.models import User


class InformationBoardSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = InformationBoard 
        fields = ['id', 'username', 'message', 'user']