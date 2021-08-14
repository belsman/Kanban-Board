from rest_framework import serializers
from board.models import Board, List, Card


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