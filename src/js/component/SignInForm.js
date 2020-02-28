import React from "react";
import "../../styles/sign-in.scss";
import { Col, Form, InputGroup, Button, Card } from "react-bootstrap";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";

export const SignInForm = () => {

		const [signin, setSignIn] = useState({
		signin_email: "",
		signin_password: ""
	});
	const [error, seterror] = useState(false);

	const handleChange = e => {
		setSignIn({
			...signin,
			[e.target.name]: e.target.value
		});
		console.log(signin);
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
            const resultado = await axios.post(url, signin)
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
					<Button variant="primary" type="submit" className="sign-in-botton-styles">
						INICIAR SESIÓN
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};
