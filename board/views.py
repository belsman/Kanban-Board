from django.http.response import JsonResponse
from rest_framework import generics
from rest_framework import permissions
from board.models import Board, List, Task
from board.permissions import IsBoardCreator
from board.serializers import BoardSerializer, ListSerializer, TaskSerializer


def auth_user(request):
    return JsonResponse({'id': 1, 'username': 'test user'})

class DefaultMixin:
    permission_classes = [permissions.IsAuthenticated]


class BoardList(DefaultMixin, generics.ListCreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class BoardDetail(DefaultMixin, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsBoardCreator]
    queryset = Board.objects.all()
    serializer_class = BoardSerializer


class ListCreation(DefaultMixin, generics.CreateAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class ListDetail(DefaultMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class TaskCreation(DefaultMixin, generics.CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class TaskDetail(DefaultMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
