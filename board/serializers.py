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
            username=validated_data['email'],
            full_name=validated_data['full_name'],
            password = make_password(validated_data['password'])
        )
        return user


class CardSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')

    class Meta:
        model = Card
        fields = ['id', 'title', 'description', 'assigned', 'board', 'list', 'started', 'completed', 'creator']
    
    def create(self, validated_data):
        card = Card.objects.create(**validated_data)
        list = card.list
        list.cards_order.append(card.id)
        list.save()
        return card


class ListSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    cards = CardSerializer(many=True, read_only=True)

    class Meta:
        model = List
        fields = ['id', 'name', 'creator', 'board', 'cards', 'cards_order']

    def create(self, validated_data):
        list = List.objects.create(**validated_data)
        board = list.board
        board.lists_order.append(list.id)
        board.save()
        return list


class BoardSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    lists = ListSerializer(many=True, read_only=True)

    class Meta:
        model = Board
        fields = ['id', 'name', 'description', 'creator', 'lists', 'lists_order']

    def create(self, validated_data):
        board = Board.objects.create(**validated_data)
        new_lists_order = []

        for list_name in ['to do', 'doing', 'done']:
            list_data = List.objects.create(board=board, name=list_name, creator=board.creator)
            new_lists_order.append(list_data.id)

        board.lists_order = new_lists_order
        board.save()

        return board
