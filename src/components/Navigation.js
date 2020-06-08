import React, {Component} from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
    render () {
        return (
             <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={NavLink} to='/'>
                    <img src="https://www.r3.com/wp-content/themes/r3/assets/images/logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                </Navbar.Brand>
                <Nav class="navbar-nav mr-auto">
                    <Nav.Link as={NavLink} to='/teams'>Teams</Nav.Link>
                    <Nav.Link as={NavLink} to='/calendar'>Calendar</Nav.Link>
                    <Nav.Link as={NavLink} to='/request'>Request</Nav.Link>
                </Nav>
                <Nav class="navbar-nav ml-auto">
                    <Nav.Link as={NavLink} to='/notifications'>
                        <img src="https://image.flaticon.com/icons/svg/3011/3011222.svg" width="30" height="30" alt=""></img> 
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/inbox'>
                        <img src="https://img.icons8.com/cute-clipart/64/000000/inbox.png" width="30" height="30" alt=""></img>
                    </Nav.Link>
                </Nav>
             </Navbar>
        );
    }
}

export default Navigation;
  