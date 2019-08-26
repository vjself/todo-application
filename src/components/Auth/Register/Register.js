import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../../redux/reducer";
import { NavLink } from "react-router-dom";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      password: ""
    };
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  register = () => {
    const { email, first_name, last_name, username, password } = this.state;
    const user = { email, first_name, last_name, username, password };
    this.props.register(user);
    this.props.history.push("/login");
  };

  render() {
    const { email, first_name, last_name, username, password } = this.state;
    return (
      <section className="reg-cont">
        <div className="welcome">
          Already have and account? Log in <NavLink to="/login">here.</NavLink>
        </div>
        <div className="register">
          <form className="reg-form" onSubmit={e => e.preventDefault()}>
            <input
              name="email"
              type="email"
              placeholder="Email:"
              value={email}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <br />
            <input
              name="first_name"
              placeholder="First name:"
              type="text"
              value={first_name}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <br />
            <input
              name="last_name"
              placeholder="Last name:"
              type="text"
              value={last_name}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <br />

            <input
              name="username"
              type="text"
              placeholder="Username:"
              value={username}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Password:"
              value={password}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <br />
            <input
              type="submit"
              value="Submit"
              onClick={() => this.register()}
            />
          </form>
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
  register: register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
