import React, { useState } from "react";
import { Col, Form, InputGroup, Button, Card } from "react-bootstrap";

export const RegisterForm = () => {
	// function FormExample() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Form action="{{ url_for('casacadena/submit_register') }}" method="post">
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email" name="signin_email" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Nombre de Usuario" name="signin_username" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Contraseña" name="signin_password" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Ciudad" name="signin_city" />
					</Form.Group>
					<Form.Group controlId="formGridState">
						<Form.Control as="select" name="signin_country">
							<option>Venezuela</option>
							<option>Colombia</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Check
							required
							label="Al continuar estoy de acerdo con las Condiciones de Servicio y Politica de Privacidad"
							feedback="Debes aceptar los términos y condiciones para registrarte"
						/>
					</Form.Group>
					<Button variant="primary" type="submit" className="sign-in-botton-styles">
						CREAR CUENTA
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
	// }

	// render(<FormExample />);
};
