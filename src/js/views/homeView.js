import React from "react";
import "../../styles/home.scss";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { GetStarted } from "../component/GetStarted";

export const HomeView = () => (
	<div>
		<MyNavbar />
		<MyCarousel />
		<GetStarted />
		<MyFooter />
	</div>
);
