import React from "react";
import "../../styles/logged-in.scss";
import { MyNavbar } from "../component/MyNavbar";
import { MyLogInCards } from "../component/MyLogInCards";
import { LoggedInNavbar } from "../component/LoggedInNavbar";
import { MyFooter } from "../component/MyFooter";

export const LoggedInView = () => {
	return (
		<React.Fragment>
			<LoggedInNavbar />
			<MyLogInCards />
		</React.Fragment>
	);
};
