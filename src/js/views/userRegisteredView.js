import React from "react";
import "../../styles/resetPasswordEmailSent.scss";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { UserRegistered } from "../component/UserRegistered";

export const userRegisteredView = () => (
	<div>
		<MyNavbar />
		<UserRegistered />
		<MyFooter />
	</div>
);
