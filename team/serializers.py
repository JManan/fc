from rest_framework.serializers import ModelSerializer
from .models import Team
from rest_framework import serializers

class TeamSerializer(ModelSerializer):
    name = serializers.StringRelatedField(many=False)

    class Meta:
        model = Team
        fields = ['image', 'id', 'description', 'position', 'name']
