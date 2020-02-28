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
            const url = "https://3000-ee118b84-71fd-4ecc-ad47-90d453698b41.ws-us02.gitpod.io/casacadena/submit_signin";
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
			<h2 className="sign-in-title-styles mx-auto my-auto">Crea tu cuenta</h2>
			<Card.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email" name="register_email" onChange={handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="text" placeholder="Nombre de Usuario" />
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
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="text" placeholder="Ciudad" />
					</Form.Group>
					<Form.Group className="country-input-styles" controlId="formGridState">
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
					<a className="Terminos my-5 mx-auto" href="/terminos">
						Terminos y Condiciones
					</a>
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
