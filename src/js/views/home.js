import React from "react";
import petrico from "../../img/descarga.jpeg";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<div className="parallax" />

		<div className="text-center mt-5">
			<h1>Bievenido a... CasaCadena</h1>
			<p>
				<img src={petrico} />
			</p>
		</div>

		<div className="parallax" />
	</div>
);
