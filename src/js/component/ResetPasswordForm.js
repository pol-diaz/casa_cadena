import React from "react";
import "../../styles/sign-in.scss";
import { Col, Form, InputGroup, Button, Card } from "react-bootstrap";

export const ResetPasswordForm = () => {
	function ResetPasswordForm() {
		const [validated, setValidated] = useState(false);

		const handleSubmit = event => {
			const form = event.currentTarget;
			if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
			}

			setValidated(true);
			render(<ResetPasswordForm />);
		};
	}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Control className="signin-text" type="email" placeholder="Correo electrónico" />
					</Form.Group>
					<Button variant="primary" type="submit" className="reset-password-button">
						RESETEAR CLAVE
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};
