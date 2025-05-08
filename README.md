# Ekorkes-lab4project
# Game Buddy

Game Buddy is a social media site that allows for users to connect with other gamers and play together. Users can sign up, log in, view a dynamic feed of posts, and create new posts that are stored in a PostgreSQL database. The app uses asynchronous `fetch()` API calls to communicate between the client and server and is designed using a service-oriented architecture with a relational database.

---

## Installation Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/MaristGormanly/Ekorkes-lab4project
cd Ekorkes-lab4project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up the PostgreSQL Database
```bash
psql -U postgres -f server/db/create-db.sql
```

Replace `postgres` with your PostgreSQL username if needed. Ensure your database is named `finalproject`.

---

## Technologies & Dependencies

- `dotenv`: ^16.4.7
- `express`: ^4.21.2
- `express-session`: ^1.18.1
- `npm`: ^11.3.0
- `pg`: ^8.15.6

---

## Folder Structure

- `/client` – HTML/CSS/JS frontend views
- `/server` – Express.js backend API
  - `routes/` – RESTful API routes
  - `controller/` – Route logic
  - `service/` – Database access layer
  - `db/` – SQL scripts and DB config
- `create-db.sql` – PostgreSQL schema

---

## How to Run

1. Start the server:
```bash
node server/app.js
```

2. Open the app:
```url
http://localhost:1337/
```

---

## Features

- Sign up and log in
- Persistent session using `localStorage`
- Dynamic post feed fetched from backend
- Submit new posts (with optional image)
- Clean separation of concerns: controller ↔ service ↔ database

## Full API Reference

###  USERS

| URL                          | METHOD  | BODY TYPE            | EXAMPLE BODY |
|-----------------------------|---------|----------------------|---------------|
| `/api/user`                 | GET     | N/A                  | *Returns all users* |
| `/api/user/:index`          | GET     | N/A                  | *Returns one user by ID* |
| `/api/user`                 | POST    | application/json     | `{ "username": "testuser", "email": "test@example.com", "password": "testpass" }` |
| `/api/user/:index`          | PUT     | application/json     | `{ "username": "updated", "email": "updated@example.com", "password": "updatedpass" }` |
| `/api/user/:index`          | PATCH   | application/json     | `{ "email": "patch@example.com" }` |
| `/api/user/:index`          | DELETE  | N/A                  | *Deletes user by ID* |
| `/api/user/session`         | GET     | N/A                  | *Returns the current session user or `null`* |

---

### POSTS

| URL                          | METHOD  | BODY TYPE            | EXAMPLE BODY |
|-----------------------------|---------|----------------------|---------------|
| `/api/posts`                | GET     | N/A                  | *Returns all posts* |
| `/api/posts/:index`         | GET     | N/A                  | *Returns a single post by ID* |
| `/api/posts`                | POST    | application/json     | `{ "content": "Hello world!", "username": "testuser" }` |
| `/api/posts/:index`         | PUT     | application/json     | `{ "content": "Updated post", "username": "testuser" }` |
| `/api/posts/:index`         | PATCH   | application/json     | `{ "content": "Patch update only" }` |
| `/api/posts/:index`         | DELETE  | N/A                  | *Deletes post by ID* |


