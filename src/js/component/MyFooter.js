import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from "react-bootstrap";

export const MyFooter = () => {
	return (
		<footer className="footer-styles mt-5">
			<Jumbotron className="mb-0 jumbotron-footer-styles" fluid>
				<Container>
					<h3>Casa Cadena, LLC</h3>
					<a className="mailto-styles" href="mailto:casacadena@gmail.com">
						casacadena@gmail.com
					</a>
					<p>©2019, Casa Cadena, LLC.</p>
					<p>Todos los derechos reservados</p>
				</Container>
			</Jumbotron>
		</footer>
	);
};
