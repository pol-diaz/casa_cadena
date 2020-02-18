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
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Nombre de usuario o correo" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Contraseña" />
					</Form.Group>
					<Button variant="primary" type="submit" className="sign-in-botton-styles">
						INICIAR SESIÓN
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};
