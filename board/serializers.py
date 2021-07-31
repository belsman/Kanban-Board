from rest_framework import serializers
from board.models import Board, List, Task


class TaskSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'board', 'list', 'order', 'started', 'completed', 'creator']


class ListSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    tasks = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = List
        fields = ['id', 'name', 'order', 'creator', 'board',  'tasks']


class BoardSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    lists = ListSerializer(many=True, read_only=True)

    class Meta:
        model = Board
        fields = ['id', 'name', 'description', 'creator', 'lists']

    def create(self, validated_data):
        board = Board.objects.create(**validated_data)
        for list_name in ['TO-DO', 'DOING', 'DONE']:
            List.objects.create(board=board, name=list_name)
        return board