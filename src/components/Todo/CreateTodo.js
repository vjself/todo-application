import React, { Component } from "react";
import { createTodo } from "../../redux/reducer";
import { connect } from "react-redux";

class CreateTodo extends Component {
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

  render() {
    const backgroundAddy =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFViUg_JVLAH6ovip7TjHeZRW7ELSoBDfq1J22_cl_JtVXM9tdqA";
    return (
      <div className="add-inputs">
        <input
          className="add-id"
          name="title"
          type="text"
          placeholder="Add a title..."
          value={this.state.title}
          onChange={e => this.changeHandler(e.target.name, e.target.value)}
        />
        <br />
        <input
          className="add-id"
          type="text"
          name="description"
          placeholder="Add a description..."
          value={this.state.description}
          onChange={e => this.changeHandler(e.target.name, e.target.value)}
        />
        <button
          style={{
            backgroundImage: `url(${backgroundAddy})`,
            width: "20px",
            height: "20px",
            backgroundSize: "cover",
            borderRadius: "25px",
            marginLeft: "10px",
            boxShadow: "1px 1px 3px grey",
            position: "absolute",
            alignSelf: "center",
            right: "0"
          }}
          onClick={() => {
            let completed = false;
            this.props.createTodo(
              this.state.title,
              this.state.description,
              completed
            );
            this.setState({
              title: "",
              description: ""
            });
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    todos: reduxState.todos
  };
};

export default connect(
  mapStateToProps,
  { createTodo }
)(CreateTodo);
