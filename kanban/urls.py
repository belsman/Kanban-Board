from django.urls import path, include

urlpatterns = [
    path('', include('board.urls')),
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]
