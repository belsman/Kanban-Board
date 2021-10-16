<h1 align="center">🕴️ Kanban Board API (backend) 🕴️</h1>

> This is an API that provides resources for a Kanban Board. The API provides endpoints that lets users manage resources such as Boards, Lists, Cards -- similar to what Trello does behind the scene.

### ✨ [A Frontend project that consumes this API can be found here!](https://github.com/belsman/trello-ui-clone)

## How the Project Works
- A user creates a token by using registration or login endpoints
- The user can then perform CRUD operations on Board, List, Card by using the token with the appropriate endpoints and method calls.

## API EndPoints

- 🔗 [Root URL]()


## Built With

- Python 3.8
- Django 3.2.5
- Django Rest Framework 3.12.4
- Postgresql

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

In order for ```Kanban-Board``` to work locally on your machine, you need these installations:
- Python 3.8
- Postgres database engine

### Install

1) Open the Terminal
2) Activate a virtual environment for the project
3) Run

```sh
git clone https://github.com/belsman/Kanban-Board.git
```

or, for SSH:

```sh
git@github.com:belsman/Kanban-Board.git
```

4) Run ```cd Kanban-Board``` to enter the main directory
5) Run ```pip install```
6) Create database and run migrations with these command:
    - ```python manage.py makemigrations board```
    - ```python manage.py migrate```
7) Start up the local server with ```python manage.py runserver```


## Author

👤 **Bello Babakolo**

- Github: [@belsman](https://github.com/belsman)
- Twitter: [@d_belsman](https://twitter.com/d_belsman)
- Linkdin: [Bello Babakolo](https://www.linkedin.com/in/bello-babakolo-b23b17145/)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!
