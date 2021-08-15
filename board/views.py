from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from board.models import Board, List, Card
from board.permissions import IsBoardCreator
from board.serializers import BoardSerializer, ListSerializer, CardSerializer


class ObtainAuthUser(APIView):
    def get(self, request, format=None):
        data = {}
        user = request.user
        if user.is_authenticated:
            data['id'] = user.id
            data['username'] = user.username
            if request.auth:
                data['token'] = request.auth.key
        return Response(data)
        

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


class CardViewSet(viewsets.ModelViewSet):
    """Provides 'create', 'partial_update', 'destroy' 'retrieve' actions."""
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

