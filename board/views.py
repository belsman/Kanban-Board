from django.http.response import JsonResponse
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import permissions
from board.models import Board, List, Task
from board.permissions import IsBoardCreator
from board.serializers import BoardSerializer, ListSerializer, TaskSerializer


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    permission_classes = [permissions.IsAuthenticated, IsBoardCreator]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class ListViewSet(viewsets.ModelViewSet):
    """Provides 'create', 'partial_update', 'destroy' 'retrieve' actions."""
    queryset = List.objects.all()
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class TaskCreation(viewsets.ModelViewSet):
    """Provides 'create', 'partial_update', 'destroy' 'retrieve' actions."""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

