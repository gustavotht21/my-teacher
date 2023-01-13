from turtle import st
from rest_framework.views import APIView
from rest_framework.response import Response

class HomeApiView(APIView):
    def get(self, request, format=None):
        return Response ({"nome": "Gustavo Borges", "idade": "15"}, status=200)