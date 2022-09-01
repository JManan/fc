from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TeamSerializer
from .models import Team


@api_view(['GET'])
def members(request):
    members = Team.objects.all()
    info = TeamSerializer(members, many=True)
    return Response(info.data)

@api_view(['GET'])
def member(request, pk):
    members = Team.objects.get(id=pk)
    info = TeamSerializer(members, many=False)
    return Response(info.data)
