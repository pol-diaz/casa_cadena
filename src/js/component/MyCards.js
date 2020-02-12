import { Card } from "react-bootstrap";
import React from "react";
import contact from "../../img/logo-icon-black.png";
import "bootstrap/dist/css/bootstrap.css";
export const MyCards = props => {
	return (
		<div>
			<Card style={{ width: 18 + "rem" }}>
				<Card.Img variant="top" src={contact} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						{
							"Some quick example text to build on the card title and make up the bulk of the card's content."
						}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};
