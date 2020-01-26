import React from "react";
import "../../styles/home.scss";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";

export const HomeView = () => (
	<div>
		<MyNavbar />
		<MyCarousel />
		<div className="text-center banner-styles">
			<h1 className="banner-h1-styles">Bievenido a... CasaCadena</h1>
		</div>
	</div>
);
