DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users  /* stores user credentials*/
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE posts /* stores content and links by username*/
(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    username VARCHAR(50) NOT NULL REFERENCES users(username) ON DELETE CASCADE,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
