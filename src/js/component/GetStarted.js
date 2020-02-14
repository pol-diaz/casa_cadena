import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { JoinButton } from "./JoinButton";

export const GetStarted = () => {
	return (
		<div className="container-GetStarted">
			<Jumbotron className="mb-0 get-started-styles">
				<h1 className="get-started-text">
					<b>Con Casa Cadena</b>
				</h1>
				<h2 className="get-started-text my-4">No perderás más tiempo</h2>
				<JoinButton />
				<h2 className="get-started-text my-4">Cómo funciona?</h2>
			</Jumbotron>
		</div>
	);
};
