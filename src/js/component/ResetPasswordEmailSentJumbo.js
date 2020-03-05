import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
import EmailSent from "../../img/emailsent.png";

export const ResetPasswordEmailSentJumbo = () => {
	return (
		<div className="container-EmailSent">
			<Jumbotron className="mb-0 passwordResetEmailSent">
				<img className="email-sent-icon" src={EmailSent} />
				<h2 className="get-started-text my-4">Recibirás un link en tu correo</h2>
				<div className="breakLine" />
				<h2 className="get-started-text my-4">Haz click!</h2>
				<div className="breakLine" />
				<h2 className="get-started-text my-4">Sigue los pasos</h2>
				<Button variant="primary" type="submit" className="reset-password-email-sent-botton-styles" href="/">
					LISTO
				</Button>
			</Jumbotron>
		</div>
	);
};
