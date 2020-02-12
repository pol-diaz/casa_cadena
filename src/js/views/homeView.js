import React from "react";
import "../../styles/home.scss";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyCards } from "../component/MyCards";
import { MyFooter } from "../component/MyFooter";
import { GetStarted } from "../component/GetStarted";

export const HomeView = () => (
	<div>
		<MyNavbar />
		<MyCarousel />
<<<<<<< HEAD
		<GetStarted />
=======
		<div className="text-center banner-styles">
			<h1 className="banner-h1-styles">Bievenido a... CasaCadena</h1>
		</div>
		<MyCards />
>>>>>>> cc8e8a5a9b780db70cf47a40ea2ac023c87b7e77
		<MyFooter />
	</div>
);
