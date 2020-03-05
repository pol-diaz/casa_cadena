import React from "react";
import "../../styles/logged-in.scss";
import "../../styles/home.scss";
import { MyNavbar } from "../component/MyNavbar";
import { AdCard } from "../component/AdCard";
import { MyFooter } from "../component/MyFooter";
import { MyLoggedInNavbar } from "../component/MyLoggedInNavbar";

export const LoggedInView = () => {
	return (
		<div>
			<MyLoggedInNavbar />
			<MyFooter className="footer-styles" />
		</div>
	);
};
