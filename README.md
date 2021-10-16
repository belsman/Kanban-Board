<h1 align="center">🕴️ Kanban Board API (backend) 🕴️</h1>

> This is an API that provides resources for a Kanban Board. The API provides endpoints that lets users manage resources such as Boards, Lists, Cards -- similar to what Trello does behind the scene.

### ✨ [A Frontend project that consumes this API can be found here!](https://github.com/belsman/trello-ui-clone)

## How the Project Works
- A user creates a token by using registration or login endpoints
- The user can then perform CRUD operations on Board, List, Card by using the token with the appropriate endpoints and method calls.


## API EndPoints

```ENDPOINT``` = [http://example.com](http://example.com)
### Endpoints for Authentication

| Methods        | PATH           | Description  |
| :------------- |:-------------| -----:|
| POST      | /register/ | Registers a new user to obtain token |
| POST      | /login/ | Login in an existing user to obtain token |
| GET      | /auth-user/ | Return current user |

### Endpoints for Resources
> Ensure to pass in the token in the ```Authorization``` header for the requests

| Methods        | PATH           | Description  |
| :------------- |:-------------| -----:|
| POST      | /register/ | Registers a new user to obtain token |
| POST      | /login/ | Login in an existing user to obtain token |
| GET      | /auth-user/ | Return current user |
| GET      | /boards/ | Get the list of boards |
| POST      | /boards/ | Create a new board |
| GET      | /boards/```<id>```/ | Get a single board with the given Id|
| PUT      | /boards/```<id>```/ | Update the board with the given ```id``` |
| DELETE      | /boards/```<id>```/ | Delete the board with the given ```id``` |
| POST      | /lists/ | Create a new list|
| POST      | /cards/ | Create a new card|
| PUT      | /cards/```<id>``` | Edit a card with the given ```id```|
| DELETE      | /cards/```<id>```/ | Delete the card with the given ```id``` |


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
git clone git@github.com:belsman/Kanban-Board.git
```

4) Run ```cd Kanban-Board``` to enter the main directory
5) Run ```pip install``
6) Setup the database
   - Use ```CREATE DATABASE database_name;``` to create the DB in your database's interactive prompt
   - Edit the ```DATABASES``` settings variable in the ```settings.py``` file to match your configuration e.g. ```ENGINE``` ```USER```, ```PASSWORD```, and ```NAME```
7) Run database migrations with these command:
    - ```python manage.py makemigrations board```
    - ```python manage.py migrate```
8) Start up the local server with ```python manage.py runserver```


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
