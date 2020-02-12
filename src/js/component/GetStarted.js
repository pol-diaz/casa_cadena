import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export const GetStarted = () => {
	return (
		<div className="container-GetStarted">
			<Jumbotron className="mb-0">
				<h1 className="get-started-text">
					<b>Con Casa Cadena</b>
				</h1>
				<h2 className="get-started-text">No perderás más tiempo</h2>
				<p>
					<Button className="get-started-button" variant="primary">
						Comienza Aquí
					</Button>
				</p>
				<h2 className="get-started-text">Cómo funciona?</h2>
			</Jumbotron>
		</div>
	);
};
