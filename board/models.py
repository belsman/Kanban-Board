from django.db import models


class Project(models.Model):
    """Scrum-style project management."""

    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Sprint(models.Model):
    """Development iteration period."""

    name = models.CharField(max_length=100)
    description = models.TextField(blank='', default='')
    end = models.DateField(unique=True)
    project = models.ForeignKey(Project, models.CASCADE)

    def __str__(self):
      return self.name


class State(models.Model):
    """A current state of the task. (To-Do, In-Prgress, Done) etc.""" 

    name = models.CharField(max_length=100)
    order = models.SmallIntegerField(default=0)
    sprint = models.ForeignKey(Sprint, on_delete=models.CASCADE)


class Task(models.Model):
    """Unit of work to be done for the sprint."""

    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, default='')
    # When a task does not belong to belong to a sprint and task, it is a project backlog!
    sprint = models.ForeignKey(Sprint, blank=True, null=True, on_delete=models.CASCADE)
    state = models.ForeignKey(State, blank=True, null=True, on_delete=models.CASCADE)
    #
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    is_backlog = models.BooleanField()
    order = models.SmallIntegerField(default=0)
    started = models.DateTimeField(blank=True, null=True)
    completed = models.DateTimeField(blank=True, null=True)
    completion_hours = models.PositiveIntegerField()

    def __str__(self):
        return self.title