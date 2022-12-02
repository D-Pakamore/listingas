from rest_framework import viewsets, permissions, status
from quickstart.serializers import InformationBoardSerializer
from quickstart.models import InformationBoard
from rest_framework.response import Response
from rest_framework.decorators import api_view, action



class InformationBoardViewSet(viewsets.ModelViewSet):
    queryset = InformationBoard.objects.all()
    serializer_class = InformationBoardSerializer
    permission_classes = [permissions.AllowAny]