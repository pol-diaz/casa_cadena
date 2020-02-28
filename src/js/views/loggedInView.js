import React from "react";
import "../../styles/logged-in.scss";
import { MyNavbar } from "../component/MyNavbar";
import { AdCard } from "../component/AdCard";
import { MyFooter } from "../component/MyFooter";

export const LoggedInView = () => {
	return (
		<React.Fragment>
			<MyNavbar />
			<AdCard />
		</React.Fragment>
	);
};
