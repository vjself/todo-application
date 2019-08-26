import React, { Component } from "react";
import { deleteTodo, markComplete, updateTodo } from "../../redux/reducer";
import { connect } from "react-redux";
import "../../App.css";
import { Link } from "react-router-dom";

class TodoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editBox: false
    };
  }

  editModal = () => {
    this.setState({
      editBox: !this.state.editBox
    });
  };

  render() {
    console.log(this.props);
    const bg =
      "https://cdn3.iconfinder.com/data/icons/simplius-pack/512/pencil_and_paper-512.png";
    const background =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyDj_DkAcWYpN2pmQGhotoF2q25AO7LybLedegH1qma-bckJC";
    return (
      <div className="todo-instance">
        {this.state.editBox === false ? (
          <div
            tooltip="Click to edit..."
            tooltip-position="top"
            className="title"
            onClick={this.editModal}
          >
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
        ) : (
          <div className="edit-button">
            <input
              id="edit-input"
              type="text"
              name="title"
              placeholder="Title..."
              onChange={e =>
                this.props.handleEdit(e.target.name, e.target.value)
              }
            />
            <input
              id="edit-input"
              type="text"
              name="description"
              placeholder="Description"
              onChange={e =>
                this.props.handleEdit(e.target.name, e.target.value)
              }
            />
            <button onClick={this.editModal}>Cancel</button>
            <button
              onClick={() => {
                this.props.updateTodo(this.props.id, this.props.update);
              }}
            >
              Confirm
            </button>
          </div>
        )}
        <div className="e-d-butd">
          <Link to="/edit-task">
            <button
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                width: "20px",
                height: "20px",
                borderRadius: "25px",
                marginRight: "10px",
                boxShadow: "2px 2px 3px grey"
              }}
            />
          </Link>
          <button
            style={{ borderRadius: "25px" }}
            className={
              this.props.completed === false ? "completed-f" : "completed-t"
            }
            onClick={() =>
              this.props.markComplete(this.props.id, !this.props.completed)
            }
          >
            Complete
          </button>
          <button
            id="delete-button"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              width: "20px",
              height: "20px",
              borderRadius: "25px"
            }}
            onClick={() => {
              this.props.deleteTodo(this.props.id);
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteTodo, markComplete, updateTodo }
)(TodoDisplay);
