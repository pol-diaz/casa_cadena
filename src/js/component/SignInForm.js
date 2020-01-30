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
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit" className="sign-in-botton-styles">
						Submit
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};
