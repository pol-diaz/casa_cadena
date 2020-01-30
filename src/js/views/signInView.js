import React from "react";
import "../../styles/home.scss";
import { MyCarousel } from "../component/MyCarousel";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { SignInForm } from "../component/SignInForm";

export const SignInView = () => (
	<div>
		<SignInForm />
	</div>
);
