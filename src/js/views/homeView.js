import React from "react";
import "../../styles/home.scss";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyCards } from "../component/MyCards";
import { MyFooter } from "../component/MyFooter";
import { GetStarted } from "../component/GetStarted";
import { JoinButton } from "../component/JoinButton";

export const HomeView = () => (
	<div>
		<MyNavbar />
		<MyCarousel />
		<GetStarted />
		<MyCards />
		<MyFooter />
	</div>
);
