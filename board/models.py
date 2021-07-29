from django.db import models


class Board(models.Model):
    """Kanban board for managing tasks"""

    name = models.CharField(max_length=100)
    description = models.TextField(blank='', default='')

    def __str__(self):
        return self.name


class List(models.Model):
    """Current state of the task. (Backlog, To-Do, In-Prgress, Done) etc.""" 

    name = models.CharField(max_length=100)
    order = models.SmallIntegerField(default=0)
    board = models.ForeignKey(Board, related_name='lists', on_delete=models.CASCADE)

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

    def __str__(self):
        return self.title