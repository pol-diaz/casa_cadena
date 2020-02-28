import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/logged-in.scss";

export const AdCard = () => {
	return (
		<Card className="card-styles my-3 mx-auto">
			<Card.Img
				className="card-image-styles my-2 mx-3"
				variant="left"
				src="https://www.w3schools.com/howto/img_avatar2.png"
			/>
			<Card.Body className="container">
				<Card.Subtitle className="row mb-2 text-muted card-subtitle-styles">
					Nombre: <span className="card-text-styles"> María Perez</span>
				</Card.Subtitle>
				<Card.Subtitle className="row mb-2 text-muted card-subtitle-styles">
					Usuario: <span className="card-text-styles"> Mariperez</span>
				</Card.Subtitle>
				<Card.Subtitle className="row mb-2 text-muted card-subtitle-styles">
					Tasa: <span className="card-text-styles"> 75.000,00 BsS</span>
				</Card.Subtitle>
				<Card.Subtitle className="row mb-2 text-muted card-subtitle-styles">
					Banco: <span className="card-text-styles"> Banesco</span>
				</Card.Subtitle>
				<Card.Subtitle className="row mb-2 text-muted card-subtitle-styles">
					Descripción: <span className="card-text-styles" />
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};
