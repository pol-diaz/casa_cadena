import React from "react";
import "../../styles/sign-in.scss";
import { Col, Form, InputGroup, Button, Card } from "react-bootstrap";

export const ConfirmNewPasswordForm = () => {
	function ConfirmNewPasswordForm() {
		const [validated, setValidated] = useState(false);

		const handleSubmit = event => {
			const form = event.currentTarget;
			if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
			}

			setValidated(true);
			render(<ConfirmNewPasswordForm />);
		};
	}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Form>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Nueva Contraseña" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Confirmar Nueva Contraseña" />
					</Form.Group>
					<Button variant="primary" type="submit" className="reset-password-button" href="/changed-password">
						CAMBIAR CLAVE
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};
