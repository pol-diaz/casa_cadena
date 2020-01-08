import React from "react";
import petrico from "../../img/descarga.jpeg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Bievenido a... CasaCadena</h1>
		<p>
			<img src={petrico} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
