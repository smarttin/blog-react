import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  NavLink,
} from 'reactstrap';

import { AuthContext } from '../../context/AuthContext';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarIsOpen: false,
    };
  }
  static contextType = AuthContext;

  render() {
    const toggle = () =>
      this.setState({ navbarIsOpen: !this.state.navbarIsOpen });
    const { user, logout } = this.context;
    console.log(user);
    // if user ? display any part of the navbar
    // or use userDetail in navbar
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">MyForum</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={this.state.navbarIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user ? (
              <>
                <NavItem>
                  <NavLink href="/posts">Posts</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
