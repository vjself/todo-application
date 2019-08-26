import React from "react";
import { Switch, Route } from "react-router-dom";
import TodoList from "./components/Todo/TodoList";
import EditTodo from "./components/Todo/EditTodo";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Home from "./components/Home/Home";

export default (
  <Switch>
    <Route component={EditTodo} path="/edit-task" />
    <Route component={TodoList} path="/todo-list" />
    <Route component={Register} path="/register" />
    <Route component={Login} path="/login" />
    <Route component={Home} exact path="/" />
  </Switch>
);
