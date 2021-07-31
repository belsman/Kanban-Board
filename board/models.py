from django.conf import settings
from django.db import models


class Board(models.Model):
    """Kanban board for managing tasks"""

    name = models.CharField(max_length=100)
    description = models.TextField(blank='', default='')
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='created_boards', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class List(models.Model):
    """Current state of the task. (Backlog, To-Do, In-Prgress, Done) etc.""" 

    name = models.CharField(max_length=100)
    order = models.SmallIntegerField(default=0)
    board = models.ForeignKey(Board, related_name='lists', on_delete=models.CASCADE)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='created_lists', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Task(models.Model):
    """Unit of work to be done for the sprint."""

    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, default='')
    board = models.ForeignKey(Board, related_name='tasks', on_delete=models.CASCADE)
    list = models.ForeignKey(List, related_name='tasks', blank=True, null=True, on_delete=models.CASCADE)
    order = models.SmallIntegerField(default=0)
    started = models.DateTimeField(blank=True, null=True)
    completed = models.DateTimeField(blank=True, null=True)
    assigned = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='assigned_tasks', null=True, blank=True, on_delete=models.CASCADE)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='created_tasks', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.title