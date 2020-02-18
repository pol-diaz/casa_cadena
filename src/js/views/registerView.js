import React from "react";
import "../../styles/register.scss";
import { RegisterForm } from "../component/RegisterForm";
import { MyFooter } from "../component/MyFooter";
import { MyNavbar } from "../component/MyNavbar";

export const RegisterView = () => {
	return (
		<div>
			<MyNavbar />
			<h2 className="sign-in-title-styles mx-auto my-2">Crea tu cuenta</h2>
			<RegisterForm />
			<MyFooter />
		</div>
	);
};
