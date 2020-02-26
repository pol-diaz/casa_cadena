import React from "react";
import "../../styles/register.scss";
import { RegisterForm } from "../component/RegisterForm";
import { MyFooter } from "../component/MyFooter";
import { MyNavbar } from "../component/MyNavbar";

export const RegisterView = () => {
	return (
		<div>
			<MyNavbar />
			<RegisterForm />
			<MyFooter />
		</div>
	);
};
