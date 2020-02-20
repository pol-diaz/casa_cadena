import React, { useState } from "react";
import { Col, Form, InputGroup, Button, Card } from "react-bootstrap";
import axios from "axios";

export const RegisterForm = () => {
	// function FormExample() {
	const [register, setRegister] = useState({
		register_email: "",
		register_username: "",
		register_document_id: "",
		register_password: "",
		register_city: ""
	});
	const [error, seterror] = useState(false);

	const handleChange = e => {
		setRegister({
			...register,
			[e.target.name]: e.target.value
		});
		console.log(register);
	};

	const handleSubmit = event => {
		e.preventDefault();
        //Validamos que los campos esten llenos 
        // if (nombrePlatillo === '' || precioPlatillo === '' || categoria === '') {
        //     guardarError(true)
        //     return;
        // }
        // guardarError(false);
        // Creamos el nuevo producto, es recomendable meterlo en un try catch
        try {
            const url = `http://localhost:4000/restaurant`;
            const resultado = await axios.post(url, register)
            if (resultado.status === 201) {
                alert('todo fino');
                
            }
        } catch (err) {
            alert('todo fallo');
        }

		
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email" name="register_email" onChange={handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicuser">
						<Form.Control
							type="text"
							placeholder="Nombre de Usuario"
							name="register_username"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicuser">
						<Form.Control type="text" placeholder="Cedula" name="register_document_id" onChange={handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicpassword">
						<Form.Control
							type="password"
							placeholder="Contraseña"
							name="register_password"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasiccity">
						<Form.Control type="text" placeholder="Ciudad" name="register_city" onChange={handleChange} />
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
