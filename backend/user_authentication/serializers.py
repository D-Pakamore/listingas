from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth.models import User, Group











# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['url', 'username', 'email', 'groups', 'password']

#     def create(self, validated_data):
#         #pop password and email
#         password = validated_data.pop('password', None)
#         # get the rest post data
#         instance = self.Meta.model(**validated_data)

#         if password is not None:
#             #encrypt password
#             instance.set_password(password)
#             #save new user
#             instance.save()

#         return instance

# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ['url', 'name']