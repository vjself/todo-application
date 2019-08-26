import React, { Component } from "react";
import "./header.css";
import logo from "./todoLogo.png";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { logout } from "../../redux/reducer";
import Logout from "../Auth/Logout/Logout";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  logoutFn = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    console.log();
    return (
      <div className="header">
        <img src={logo} alt="" />
        {_.isEmpty(this.props.user) !== true ? (
          <Logout logout={() => this.logoutFn()} />
        ) : (
          <div className="nav-bar">
            <NavLink to="/login">Login</NavLink>
            <br />
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

const mapDispatchToProps = {
  logout: logout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
