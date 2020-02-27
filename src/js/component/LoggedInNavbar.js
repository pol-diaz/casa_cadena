import React from "react";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import logo from "../../img/logo-icon-white.png";

export const LoggedInNavbar = () => {
	return (
		<Navbar className="cc-navbar" bg="light" expand="lg">
			<Navbar.Brand href="/">
				<img src={logo} style={{ width: 80 + "px", border: 0 + "px" }} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link className="cc-navlink" href="#que-hacemos">
						{"Comprar"}
					</Nav.Link>
					<Nav.Link className="cc-navlink" href="#como-funciona">
						{"Vender"}
					</Nav.Link>
					<Nav.Link className="cc-navlink" href="#tutoriales">
						{"Editar Perfil"}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
