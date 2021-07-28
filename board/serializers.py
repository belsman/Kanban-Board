from rest_framework import serializers
from board.models import Board, List, Task

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ['id', 'name', 'description']


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        models = List
        fields = ['id', 'name', 'board']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        models = Task
        fields = ['id', 'title', 'description', 'board', 'list', 'order', 'started', 'completed']