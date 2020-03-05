import React from "react";
import "../../styles/home.scss";
import { Jumbotron, Button } from "react-bootstrap";

export const JoinButton = () => {
	return (
		<Button href="/register" className="get-started-button my-3" variant="primary">
			Únete
		</Button>
	);
};
