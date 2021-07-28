from rest_framework import serializers
from board.models import Board, List, Task


class BoardSerializer(serializers.ModelSerializer):
    # return related list
    class Meta:
        model = Board
        fields = ['id', 'name', 'description']


class ListSerializer(serializers.ModelSerializer):
    # return related tasks
    class Meta:
        model = List
        fields = ['id', 'name', 'order', 'board']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'board', 'list', 'order', 'started', 'completed']