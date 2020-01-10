import React from "react";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import logo from "../../img/logo versiones-06.png";

export const MyNavbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand.Link to="/">
				<img src={logo} style={{ width: 500, height: 450 }} />
			</Navbar.Brand.Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#como-funciona">¿Cómo Funciona?</Nav.Link>
					<Nav.Link href="#comisiones">Comisiones</Nav.Link>
					<Nav.Link href="#servicios">Servicios</Nav.Link>
					<Nav.Link href="#inicia-sesion">Inicia Sesión</Nav.Link>
					<Nav.Link to="/register">Register</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
