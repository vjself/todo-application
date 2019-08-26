import React, { Component } from "react";
import "./login.css";
import { connect } from "react-redux";
import { login, getUser, getUserTodos } from "../../../redux/reducer";
import _ from "lodash";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  login = () => {
    const { username, password } = this.state;
    let user = { username, password };
    this.props.login(user);
    this.props.getUserTodos();
    this.props.getUser();
    if (this.props.user !== null) {
      this.props.history.push("/todo-list");
    } else {
      alert("Please try again.");
      this.setState({
        username: "",
        password: ""
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <section className="login">
        <div>
          <input
            className="add-id"
            name="username"
            value={this.state.username}
            type="text"
            placeholder="Username..."
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          <br />
          <input
            className="add-id"
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Password..."
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
        </div>
        <button className="login-button" onClick={() => this.login()}>
          Login
        </button>
      </section>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

const mapDispatchToProps = {
  login: login,
  getUser: getUser,
  getUserTodos: getUserTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
