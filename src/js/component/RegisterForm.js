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
			<h2 className="sign-in-title-styles mx-auto my-auto">Crea tu cuenta</h2>
			<Card.Body>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Nombre de Usuario" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Contraseña" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Ciudad" />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridState">
						<Form.Control as="select">
							<option>Venezuela</option>
							<option>Colombia</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Check
							required
							label="Al continuar estoy de acuerdo con las Condiciones de Servicio y Politica de Privacidad"
							feedback="Debes aceptar los Términos y Condiciones para registrarte"
						/>
					</Form.Group>
					<Button variant="primary" type="submit" className="sign-in-botton-styles" href="/user-registered">
						CREAR CUENTA
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
	// }

	// render(<FormExample />);
};
