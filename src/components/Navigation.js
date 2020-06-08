import React, {Component} from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
    render () {
        return (
             <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={NavLink} to='/'>
                    <img src="https://www.r3.com/wp-content/themes/r3/assets/images/logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={NavLink} to='/teams'>Teams</Nav.Link>
                    <Nav.Link as={NavLink} to='/calendar'>Calendar</Nav.Link>
                    <Nav.Link as={NavLink} to='/request'>Request</Nav.Link>
                </Nav>
             </Navbar>
        );
    }
}

export default Navigation;
  