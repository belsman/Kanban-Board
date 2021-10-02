from django.conf import settings
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token


class UserManager(BaseUserManager):
    def create_user(self, email, full_name, password=None):
        """ Create a new user"""
        if not email:
            raise ValueError('User must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, full_name=full_name)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, full_name, password=None):
        """ Create a new superuser profile """
        user = self.create_user(email, full_name, password)
        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user


class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    full_name = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    objects = UserManager()

    def __str__(self):
        return f"<User {self.email} >"


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Board(models.Model):
    """Kanban board for managing cards"""

    name = models.CharField(max_length=100)
    description = models.TextField(blank='', default='')
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='created_boards', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class List(models.Model):
    """Current state of the card. (Backlog, To-Do, In-Prgress, Done) etc.""" 

    name = models.CharField(max_length=100)
    order = models.SmallIntegerField(default=0)
    board = models.ForeignKey(Board, related_name='lists', on_delete=models.CASCADE)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='created_lists', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Card(models.Model):
    """Unit of work to be done for the sprint."""

    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, default='')
    board = models.ForeignKey(Board, related_name='cards', on_delete=models.CASCADE)
    list = models.ForeignKey(List, related_name='cards', blank=True, null=True, on_delete=models.CASCADE)
    order = models.SmallIntegerField(default=0)
    started = models.DateTimeField(blank=True, null=True)
    completed = models.DateTimeField(blank=True, null=True)
    assigned = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='assigned_cards', null=True, blank=True, on_delete=models.CASCADE)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='created_cards', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.title