from django.db import router
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from board.views import BoardViewSet, ListViewSet, CardViewSet

router = DefaultRouter()
router.register(r'boards', BoardViewSet)
router.register(r'lists', ListViewSet)
router.register(r'tasks', CardViewSet)

urlpatterns = [
    path('', include(router.urls))
]
