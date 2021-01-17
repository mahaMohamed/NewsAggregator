import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import footballImage from "../assets/football.png"
import bellImage from "../assets/bell.png"
import searchImage from "../assets/search.png"
import userImage from "../assets/user.png"
import menuImage from "../assets/menu.png"
import "./CustomNavbar.css"
export default function CustomNavbar() {

    return (
        <div className="custom-nav">

            <Navbar variant="dark" style={{ backgroundColor: "rgb(92,118,201)" }} expand="lg">
                <Navbar.Brand href="/">
                <img
                        alt=""
                        src={menuImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        style={{marginRight: "0.5rem"}}
                    />{' '}
                    <img
                        alt=""
                        src={footballImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                   SportsLive
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="justify-content-end " style={{ width: "100%", color: "white"}}>
                        <Nav.Link href="">
                            <img
                                alt=""
                                src={bellImage}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{'  '}
                            {/* Notifications */}
                        </Nav.Link>
                        <Nav.Link href="">
                            <img
                                alt=""
                                src={searchImage}
                                width="25"
                                height="25"
                                className="d-inline-block align-top"
                            />
                            {/* {'  '}Search */}
                            </Nav.Link>
                        <Nav.Link href="">
                            <img
                                alt=""
                                src={userImage}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{'  '}
                            {/* Profile */}
                            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
