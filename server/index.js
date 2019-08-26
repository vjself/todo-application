const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
require("dotenv").config();
const aC = require("./controllers/authController");
const tC = require("./controllers/todoController");
app.use(express.json());

const { CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB online.");
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    maxAge: 60 * 60 * 12 // 12 hours
  })
);

//AUTH Endpoints
app.post("/auth/register", aC.register);
app.post("/auth/login", aC.login);
app.post("/auth/logout", aC.logout);
app.get("/auth/user", aC.getCurrentUser);

//Todo Endpoints
app.get("/api/getAllTodos", tC.getAllTodos);
app.get("/api/todos", tC.getUserTodos);
app.post("/api/todos", tC.createTodo);
app.put("/api/updateDescription/:id", tC.updateDescription);
app.put("/api/updateTitle/:id", tC.updateTitle);
app.put("/api/todos", tC.markComplete);
app.delete("/api/todos/:id", tC.deleteTodo);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server just popped off on ${PORT}.`);
});

app.use(express.static(`${__dirname}/../build`));

// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });
