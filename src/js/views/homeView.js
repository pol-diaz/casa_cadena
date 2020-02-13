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
		<GetStarted />
		<MyCards titulo="hola que tal" />
		<MyFooter />
	</div>
);
