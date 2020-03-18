import React from "react";
import "../../styles/sign-in.scss";
import { Col, Form, InputGroup, Button, Card } from "react-bootstrap";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";

export const SignInForm = () => {
	function SignInForm() {
		const [validated, setValidated] = useState(false);

		const handleSubmit = event => {
			const form = event.currentTarget;
			if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
			}

			setValidated(true);
			render(<SignInForm />);
		};
	}

	return (
		<Card className="my-0 sign-in-form-styles" style={{ width: "18rem" }}>
			<Card.Body>
				<Form action="{{ url_for('casacadena/submit_register') }}" method="post">
					<Form.Group controlId="formBasicEmail">
						<Form.Control
							className="signin-text"
							type="email"
							placeholder="Nombre de usuario o correo"
							name="signin_email"
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control
							className="signin-text"
							type="password"
							placeholder="Contraseña"
							name="signin_password"
						/>
					</Form.Group>
					<Button
						variant="primary"
						type="submit"
						className="sign-in-botton-styles"
						href="/logged-in-view-ventas">
						INICIAR SESIÓN
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};
