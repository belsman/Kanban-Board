from django.db import models


class Board(models.Model):
    """Board for managing task"""

    name = models.CharField(max_length=100)
    description = models.TextField(blank='', default='')

    def __str__(self):
        return self.name


class List(models.Model):
    """A current state of the task. (To-Do, In-Prgress, Done) etc.""" 

    name = models.CharField(max_length=100)
    order = models.SmallIntegerField(default=0)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Task(models.Model):
    """Unit of work to be done for the sprint."""

    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, default='')
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    list = models.ForeignKey(List, blank=True, null=True, on_delete=models.CASCADE)
    order = models.SmallIntegerField(default=0)
    started = models.DateTimeField(blank=True, null=True)
    completed = models.DateTimeField(blank=True, null=True)
    # points = models.PositiveIntegerField()

    def __str__(self):
        return self.title