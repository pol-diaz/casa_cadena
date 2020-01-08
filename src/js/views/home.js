import React from "react";
import petrico from "../../img/descarga.jpeg";
import "../../styles/home.scss";
import { Comofunciona } from "../component/Comofunciona";

export const Home = () => (
	<div>
		<div className="parallax" />

		<div className="logo">
			<img src={petrico} />
		</div>
		<div className="text-center mt-5">
			<h1>Bievenido a... CasaCadena</h1>
		</div>
		<div>
			<Comofunciona />
		</div>
		<div className="parallax" />
	</div>
);
