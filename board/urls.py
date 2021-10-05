from django.db import router
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from board.views import BoardViewSet, ListViewSet, CardViewSet, ObtainAuthUser, CustomAuthToken, UserCreation

router = DefaultRouter()
router.register(r'boards', BoardViewSet)
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth-user/', ObtainAuthUser.as_view()),
    path('login/', CustomAuthToken.as_view()),
    path('register/', UserCreation.as_view()),
]
