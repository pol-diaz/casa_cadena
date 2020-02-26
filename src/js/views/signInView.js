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
		<img className="logo-styles my-0" src={logo} />
		<h2 className="sign-in-title-styles mx-auto my-0">Inicio de Sesión</h2>
		<div className="sign-in-description-text-styles my-0">
			<p className="my-0 d-inline-block">¿Eres nuevo en Casa Cadena?</p>
			<a className="create- my-0 d-inline-block" href="/register">
				Crea una cuenta
			</a>
		</div>
		<SignInForm />
		<a className="reset-password mx-auto my-0 d-inline-block" href="/resetPassword">
			¿Olvidaste la Contraseña o Usuario?
		</a>
		<MyFooter />
	</div>
);
