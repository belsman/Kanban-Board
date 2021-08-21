from django.contrib.auth.models import User
from board.models import Board, List, Card


# Create users
belsman = User.objects.create_user(
    username="belsman", password="password123", email="belsman@example.com")

beekay = User.objects.create_user(
    username="beekay", password="password123", email="beekay@example.com")


# Create a default board with a set of tasks
board1 = Board.objects.create(name="building kanban project", creator=belsman)

l1 = List.objects.create(name="to-do", board=board1, creator=belsman)
l2 = List.objects.create(name="doing", board=board1, creator=belsman)
l3 = List.objects.create(name="done", board=board1, creator=belsman)

Card.objects.create(title="task one", board=board1, list=l1, creator=belsman)
Card.objects.create(title="task two", board=board1, list=l1, creator=belsman)
Card.objects.create(title="task three", board=board1, list=l1, creator=belsman)

Card.objects.create(title="task progressing one", board=board1, list=l2, creator=belsman)
Card.objects.create(title="task progressing two", board=board1, list=l2, creator=belsman)

Card.objects.create(title="done this one", board=board1, list=l3, creator=belsman)
Card.objects.create(title="done this too", board=board1, list=l3, creator=belsman)

