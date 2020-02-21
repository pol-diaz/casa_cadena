import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
import EmailSent from "../../img/emailsent.png";

export const ChangedPasswordJumbo = () => {
	return (
		<div className="container-EmailSent">
			<Jumbotron className="mb-0 passwordResetEmailSent">
				<img className="email-sent-icon" src={EmailSent} />
				<h2 className="get-started-text my-4">Tu clave ha sido cambiada exitosamente</h2>
				<div className="breakLine" />
				<h2 className="get-started-text my-4">Haz click en SIGN IN!</h2>
				<div className="breakLine" />
				<h2 className="get-started-text my-4">Casa Cadena</h2>
				<Button
					variant="primary"
					type="submit"
					className="reset-password-email-sent-botton-styles"
					href="/signInView">
					SIGN IN
				</Button>
			</Jumbotron>
		</div>
	);
};
