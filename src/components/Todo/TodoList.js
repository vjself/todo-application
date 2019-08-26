import React, { Component } from "react";
import TodoDisplay from "./TodoDisplay";
import CreateTodo from "./CreateTodo";
import { connect } from "react-redux";
import { getUserTodos, updateTodo, getUser } from "../../redux/reducer";
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
  componentDidMount() {
    this.props.getUser();
    this.props.getUserTodos();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);
  }

  render() {
    let list =
      this.props.todos !== undefined &&
      this.props.todos.map((item, i) => {
        return (
          <TodoDisplay
            key={i}
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
        <CreateTodo />
        {this.props.todos !== undefined && list}
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
  { getUserTodos, updateTodo, getUser }
)(TodoList);
