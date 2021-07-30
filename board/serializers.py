from rest_framework import serializers
from board.models import Board, List, Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'board', 'list', 'order', 'started', 'completed']


class ListSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)
    class Meta:
        model = List
        fields = ['id', 'name', 'order', 'board', 'tasks']


class BoardSerializer(serializers.ModelSerializer):
    lists = ListSerializer(many=True, read_only=True)
    class Meta:
        model = Board
        fields = ['id', 'name', 'description', 'lists']

    def create(self, validated_data):
        board = Board.objects.create(**validated_data)
        for list_name in ['TO-DO', 'DOING', 'DONE']:
            List.objects.create(board=board, name=list_name)
        return board