import React from "react";
import "../../styles/sign-in.scss";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { SignInForm } from "../component/SignInForm";
import logo from "../../img/logo-icon-black-name-black.png";

export const SignInView = () => (
	<div>
		<MyNavbar />
		<div>
			{/* <img className="logo-styles my-0" src={logo} /> */}
			<h2 className="sign-in-title-styles mx-auto my-2">Inicio de Sesión</h2>
			<div className="sign-in-description-text-styles my-0" />
			<SignInForm />
		</div>

		<div className="sign-in-description-text-styles my-0">
			<p className="my-0 d-inline-block">¿Eres nuevo en Casa Cadena?</p>
			<a className="create-account-styles my-0 d-inline-block" href="/register">
				Crea una cuenta
			</a>
		</div>
		<div className="sign-in-description-text-styles my-0">
			<a className="create-account-styles my-0 mx-auto d-block" href="/resetPassword">
				¿Olvidaste la Contraseña?
			</a>
		</div>
		<MyFooter />
	</div>
);
