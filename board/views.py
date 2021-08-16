from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import mixins
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from board.models import Board, List, Card
from board.permissions import IsBoardCreator
from board.serializers import BoardSerializer, ListSerializer, CardSerializer, UserSerializer

User = get_user_model()


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'user_id': user.pk,
            'username': user.username,
            'token': token.key,
        })


class ObtainAuthUser(APIView):
    def get(self, request, format=None):
        data = {}
        user = request.user
        if user.is_authenticated:
            data['user_id'] = user.id
            data['username'] = user.username
            if request.auth:
                data['token'] = request.auth.key
        return Response(data)
        

class UserCreation(mixins.CreateModelMixin,
                generics.GenericAPIView):
    #queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


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

