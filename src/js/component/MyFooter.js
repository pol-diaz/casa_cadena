import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from "react-bootstrap";

export const MyFooter = () => {
	return (
		<Jumbotron fluid class="footer-styles">
			<Container>
				<h1>Fluid jumbotron</h1>
				<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
			</Container>
		</Jumbotron>
	);
};
