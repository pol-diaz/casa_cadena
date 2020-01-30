import React from "react";
import "../../styles/sign-in.scss";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { SignInForm } from "../component/SignInForm";

export const SignInView = () => (
	<div>
		<MyNavbar />
		<SignInForm />
	</div>
);
