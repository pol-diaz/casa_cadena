import React, { useState } from "react";
import { Col, Row, Form, InputGroup, Button, Card } from "react-bootstrap";

export const PostOrderForm = () => {
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
			<h2 className="sign-in-title-styles mx-auto my-auto">Publica un anuncio</h2>
			<Card.Body>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<fieldset>
						<Form.Group className="order-type mx-auto" as={Row}>
							<Form.Label as="legend">TIPO</Form.Label>
							<Col sm={10}>
								<Form.Check
									type="radio"
									label="COMPRA"
									name="formHorizontalRadios"
									id="formHorizontalRadios1"
								/>
								<Form.Check
									type="radio"
									label="VENTA"
									name="formHorizontalRadios"
									id="formHorizontalRadios2"
								/>
							</Col>
						</Form.Group>
					</fieldset>
					<fieldset>
						<Form.Group as={Row}>
							<Form.Label as="legend" column sm={2}>
								BANCOS
							</Form.Label>
							{["radio"].map(type => (
								<div key={`custom-inline-${type}`} className="mb-3">
									<Col sm={10}>
										<Form.Check type="radio" label="Banesco" name="bancos" />
										<Form.Check type="radio" label="Mercantil" name="bancos" />
										<Form.Check type="radio" label="BOD" name="bancos" />
										<Form.Check type="radio" label="BDV" name="bancos" />
										<Form.Check type="radio" label="Provincial" name="bancos" />
										<Form.Check type="radio" label="BNC" name="bancos" />
										<Form.Check type="radio" label="Otros" name="bancos" />
									</Col>
								</div>
							))}
						</Form.Group>
					</fieldset>
					<Form.Group as={Col} controlId="formGridState">
						<Form.Control as="select">
							<option>Venezuela</option>
							<option>Colombia</option>
						</Form.Control>
					</Form.Group>
					<Button variant="primary" type="submit" className="sign-in-botton-styles" href="/buy">
						PUBLICAR ANUNCIO
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};
