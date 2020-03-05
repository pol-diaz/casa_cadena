import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from "react-bootstrap";
import Instagram from "../../img/instagram-icon-white.png";
import Facebook from "../../img/facebook-icon-white.png";
import Twitter from "../../img/twitter-icon-white.png";

export const MyFooter = () => {
	return (
		<footer className="footer-styles mt-5">
			<Jumbotron className="mb-0 jumbotron-footer-styles" fluid>
				<Container>
					<h3>Casa Cadena, LLC</h3>
					<a className="mailto-styles col-12" href="mailto:casacadena@gmail.com">
						casacadena@gmail.com
					</a>
					<div>
						<a className="" href="https://www.instagram.com/">
							<img className="social-icon-styles" src={Instagram} />
						</a>
						<a className="" href="https://www.facebook.com/">
							<img className="social-icon-styles" src={Facebook} />
						</a>
						<a className="" href="https://twitter.com/">
							<img className="social-icon-styles" src={Twitter} />
						</a>
					</div>

					<p className="jumbotron-footer-styles mt-5 mx-auto">©2019, Casa Cadena, LLC.</p>
					<p className="jumbotron-footer-styles mx-auto">Todos los derechos reservados</p>
				</Container>
			</Jumbotron>
		</footer>
	);
};
