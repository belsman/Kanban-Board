from rest_framework import permissions


class IsBoardCreator(permissions.BasePermission):
    """
    Custom permission that gives only creators access to the object.
    """

    def has_object_permission(self, request, view, obj):
        return obj.creator == request.user
