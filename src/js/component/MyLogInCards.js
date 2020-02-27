import { Card } from "react-bootstrap";
import React from "react";
import profile from "../../img/profile-purple.png";
import phone from "../../img/phone-purple.png";
import money from "../../img/money-purple.png";
import handshake from "../../img/handshake-purple.png";
import "bootstrap/dist/css/bootstrap.css";
export const MyLogInCards = props => {
	return (
		<Card bg="primary" text="white" style={{ width: "18rem" }}>
			<Card.Header>Header</Card.Header>
			<Card.Body>
				<Card.Title>{"Primary Card Title"}</Card.Title>
				<Card.Text>
					{"Some quick example text to build on the card title and make up the bulk of the card's content."}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
