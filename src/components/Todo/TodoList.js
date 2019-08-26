import React, { Component } from "react";
import TodoDisplay from "./TodoDisplay";
import CreateTodo from "./CreateTodo";
import { connect } from "react-redux";
import { updateTodo } from "../../redux/reducer";
import "../../App.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  updateTodo = todoId => {
    const { title, description } = this.state;
    this.props.updateTodo(todoId, title, description);
  };

  render() {
    let list = this.props.todos.map((item, i) => {
      return (
        <TodoDisplay
          key={item.todo_id}
          id={item.todo_id}
          title={item.title}
          description={item.description}
          completed={item.completed}
          updateTodo={this.updateTodo}
          handleEdit={this.changeHandler}
        />
      );
    });
    return (
      <div className="cont">
        <h2>Add a task:</h2>
        <CreateTodo />
        <br></br>
        <div className="todos-container">{list}</div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user,
    todos: reduxState.todos
  };
};

export default connect(
  mapStateToProps,
  { updateTodo }
)(TodoList);
