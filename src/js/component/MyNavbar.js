import React from "react";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import { logo } from "../../img/logo-icon-white-name-white.png";

export const MyNavbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>
				<Link to="/">
					<img src={logo} style={{ width: 100 + "px", height: 60 + "px" }} />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#como-funciona">{"¿Cómo Funciona?"}</Nav.Link>
					<Nav.Link href="#comisiones">Comisiones</Nav.Link>
					<Nav.Link href="#servicios">Servicios</Nav.Link>
					<Nav.Link href="#inicia-sesion">{"Inicia Sesión"}</Nav.Link>
					<Nav.Link href="#hola">Register</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
