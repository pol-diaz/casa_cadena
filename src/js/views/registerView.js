import React from "react";
import { RegisterForm } from "../component/RegisterForm";
import { MyNavbar } from "../component/MyNavbar";

export const RegisterView = () => {
	return (
		<div>
			<MyNavbar />
			<RegisterForm />
		</div>
	);
};
