import React from "react";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import logo from "../../img/logo-icon-white.png";

export const MyNavbar = () => {
	return (
		<Navbar className="cc-navbar" bg="light" expand="lg">
			<Navbar.Brand href="/">
				<img src={logo} style={{ width: 80 + "px", border: 0 + "px" }} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
<<<<<<< HEAD
					<Nav.Link className="cc-navlink" href="#que-hacemos">
						{"¿Qué Hacemos?"}
					</Nav.Link>
					<Nav.Link className="cc-navlink" href="#como-funciona">
						{"¿Cómo Funciona?"}
					</Nav.Link>
					<Nav.Link className="cc-navlink" href="#tutoriales">
						{"Tutoriales"}
					</Nav.Link>
					<Nav.Link className="cc-navlink" href="#inicia-sesion">
						{"Inicia Sesión"}
					</Nav.Link>
					<Nav.Link className="cc-navlink" href="#registrate">
						{"Regístrate"}
					</Nav.Link>
=======
					<Nav.Link href="#quehacemos">{"¿Qué Hacemos?"}</Nav.Link>
					<Nav.Link href="#como-funciona">{"¿Cómo Funciona?"}</Nav.Link>
					<Nav.Link href="#tutoriales">{"Tutoriales"}</Nav.Link>
					<Nav.Link href="/loginView">{"Inicia Sesión"}</Nav.Link>
					<Nav.Link href="/register">{"Regístrate"}</Nav.Link>
>>>>>>> cd8e8fdde2be90b5427b914d75b5f68f64d1320e
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
