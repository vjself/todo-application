import React, { Component } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { login, getUser, getUserTodos } from "../../../redux/reducer";

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
    // this.props.getUser();
    this.props.getUserTodos();
    this.props.history.push("/todo-list");
  };

  render() {
    return (
      <section className="login">
        <div>
          <input
            name="username"
            value={this.state.username}
            type="text"
            placeholder="Username..."
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          <br />
          <input
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Password..."
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          <button className="login-button" onClick={() => this.login()}>
            Login
          </button>
        </div>
        <div>
          <NavLink to="/register">Register</NavLink>
        </div>
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
