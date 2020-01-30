import React from "react";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import logo from "../../img/logo-icon-purple.png";

export const MyNavbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">
				<img src={logo} style={{ width: 80 + "px", border: 0 + "px" }} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#quehacemos">{"¿Qué Hacemos?"}</Nav.Link>
					<Nav.Link href="#como-funciona">{"¿Cómo Funciona?"}</Nav.Link>
					<Nav.Link href="#tutoriales">{"Tutoriales"}</Nav.Link>
					<Nav.Link href="/signInView">{"Inicia Sesión"}</Nav.Link>
					<Nav.Link href="/register">{"Regístrate"}</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
