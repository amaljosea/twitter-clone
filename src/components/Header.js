import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../images/logo.png'
import './Header.css'

const Login = ({ displayLinks }) => {
    return (
        <Navbar className="nav-color" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    className="nav-logo"
                    alt="TweetX logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {displayLinks && <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Nav.Link href="/feed">Feed</Nav.Link>
                    <Nav.Link href="/users">Users</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>}
        </Navbar>
    )
}

export default Login