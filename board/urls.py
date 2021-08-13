from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from board import views

urlpatterns = [
    path('boards/', views.BoardList.as_view()),
    path('boards/<int:pk>/', views.BoardDetail.as_view()),

    path('lists/', views.ListCreation.as_view()),
    path('lists/<int:pk>/', views.ListDetail.as_view()),

    path('tasks/', views.TaskCreation.as_view()),
    path('tasks/<int:pk>/', views.TaskDetail.as_view()),

    path('auth-user', views.auth_user),
]

urlpatterns = format_suffix_patterns(urlpatterns)