import React from "react";
import petrico from "../../img/descarga.jpeg";
import "../../styles/home.scss";
import { Comofunciona } from "../component/Comofunciona";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { Carruselazo } from "../component/Carruselazo";

export const Home = () => (
	<div>
		<div className="parallax" />
		<div>
			<MyNavbar />
		</div>
		<div className="logo">
			<img src={petrico} />
		</div>

		<Carruselazo />
		<div className="text-center mt-5">
			<h1>Bievenido a... CasaCadena</h1>
		</div>
		<div>
			<Comofunciona />
		</div>
		<div>
			<MyFooter />
		</div>
		<div className="parallax" />
	</div>
);
