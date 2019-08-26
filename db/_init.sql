DROP TABLE IF EXISTS todos;
DROP TABLE IF EXISTS todo_users;

CREATE TABLE todo_users
(
   id SERIAL PRIMARY KEY,
   email VARCHAR(64) NOT NULL UNIQUE,
   first_name VARCHAR(24) NOT NULL,
   last_name VARCHAR(64) NOT NULL,
   username VARCHAR(24) NOT NULL UNIQUE,
   hash TEXT NOT NULL
);

CREATE TABLE todos
(
   todo_id SERIAL PRIMARY KEY,
   title VARCHAR(64) NOT NULL,
   description TEXT,
   completed BOOLEAN NOT NULL,
   user_id INTEGER REFERENCES todo_users
   (id)
);
