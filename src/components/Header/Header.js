import React, { Component } from "react";
import "./header.css";
import logo from "./todoLogo.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
    return (
      <div className="header">
        <img src={logo} alt="" />
        <Logout logout={() => this.logoutFn()} />
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
