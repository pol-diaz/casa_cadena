import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
import EmailSent from "../../img/emailsent.png";

export const UserRegistered = () => {
	return (
		<div className="container-EmailSent">
			<Jumbotron className="mb-0 passwordResetEmailSent">
				<img className="email-sent-icon" src={EmailSent} />
				<h2 className="get-started-text my-4">Tu registro ha sido exitoso!</h2>
				<div className="breakLine" />
				<h2 className="get-started-text my-4">Tus datos seran verificados</h2>
				<div className="breakLine" />
				<h2 className="get-started-text my-4">Tan pronto sean aprobados, podrás operar con Casa Cadena</h2>
				<Button variant="primary" type="submit" className="reset-password-email-sent-botton-styles" href="/">
					LISTO
				</Button>
			</Jumbotron>
		</div>
	);
};
