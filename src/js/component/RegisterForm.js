import React, { useState } from "react";
import { Col, Form, InputGroup, Button, Card } from "react-bootstrap";

export const RegisterForm = () => {
	// function FormExample() {
	const [register, setRegister] = useState({
		signin_email: "",
		signin_username: "",
		signin_cedula: "",
		signin_password: "",
		signin_city: ""
	});
	const [validated, setValidated] = useState(false);

	const handleChange = e => {
		setRegister({
			...register,
			[e.target.name]: e.target.value
		});
		console.log(register);
	};

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
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email" name="signin_email" onChange={handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicuser">
						<Form.Control
							type="text"
							placeholder="Nombre de Usuario"
							name="signin_username"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicuser">
						<Form.Control type="text" placeholder="Cedula" name="signin_cedula" onChange={handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicpassword">
						<Form.Control
							type="password"
							placeholder="Contraseña"
							name="signin_password"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasiccity">
						<Form.Control type="text" placeholder="Ciudad" name="signin_city" onChange={handleChange} />
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
