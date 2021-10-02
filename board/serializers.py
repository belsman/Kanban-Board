from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from board.models import Board, List, Card

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(read_only=True, source='auth_token')

    class Meta:
        model = User
        fields = ['id', 'email', 'full_name', 'password', 'token']

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            password = make_password(validated_data['password'])
        )
        return user

class CardSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')

    class Meta:
        model = Card
        fields = ['id', 'title', 'description', 'assigned', 'board', 'list', 'order', 'started', 'completed', 'creator']


class ListSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    cards = CardSerializer(many=True, read_only=True)

    class Meta:
        model = List
        fields = ['id', 'name', 'order', 'creator', 'board',  'cards']


class BoardSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    lists = ListSerializer(many=True, read_only=True)

    class Meta:
        model = Board
        fields = ['id', 'name', 'description', 'creator', 'lists']

    def create(self, validated_data):
        board = Board.objects.create(**validated_data)
        for list_name in ['to-do', 'doing', 'done']:
            List.objects.create(board=board, name=list_name, creator=board.creator)
        return board