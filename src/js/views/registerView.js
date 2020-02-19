import React from "react";
import "../../styles/register.scss";
import { RegisterForm } from "../component/RegisterForm";
import { MyFooter } from "../component/MyFooter";
import { MyNavbar } from "../component/MyNavbar";

export const RegisterView = () => {
	return (
		<div>
			<MyNavbar />
			<h2 className="sign-in-title-styles mx-auto my-2">
				<strong>Crea tu cuenta</strong>
			</h2>
			<RegisterForm />
			<div className="sign-in-description-text-styles my-2">
				<p className="my-0 d-inline-block">¿Ya tienes una cuenta? </p>
				<a className="create- my-0 d-inline-block link" href="/register">
					Inicia Sesión
				</a>
			</div>
			<MyFooter />
		</div>
	);
};
