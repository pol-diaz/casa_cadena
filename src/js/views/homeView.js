import React from "react";
import "../../styles/home.scss";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyCards } from "../component/MyCards";
import { MyFooter } from "../component/MyFooter";

export const HomeView = () => (
	<div>
		<MyNavbar />
		<MyCarousel />
		<div className="text-center banner-styles">
			<h1 className="banner-h1-styles">Bievenido a... CasaCadena</h1>
		</div>
		<MyCards />
	</div>
);
