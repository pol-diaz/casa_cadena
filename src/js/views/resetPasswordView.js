import React from "react";
import "../../styles/reset-password.scss";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { ResetPasswordForm } from "../component/ResetPasswordForm";

export const resetPasswordView = () => (
	<div>
		<MyNavbar />
		<ResetPasswordForm />
		<MyFooter />
	</div>
);
