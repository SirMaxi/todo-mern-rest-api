import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavItem } from "reactstrap";

class AppNavbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
          <NavItem>
              <span className="navbar-text mr-3">
                <strong>{user ? `Welcome ${user.name}` : ''}</strong>
              </span>
          </NavItem>
        <li>
          <Logout />
        </li>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <li className="nav-item active">
          <a className="nav-link" href="https://mywebsite-24f67.web.app/">
            {" "}
            My Portfolio
          </a>
        </li>
        <li>
          <RegisterModal />
        </li>
        <li>
          <LoginModal />
        </li>
      </Fragment>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Shopping List
            </Link>
            <div className="navbar-nav ml-auto">
            {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
