import React from "react";
import "../../styles/reset-password.scss";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { ConfirmNewPasswordForm } from "../component/ConfirmNewPasswordForm";

export const confirmNewPasswordView = () => (
	<div>
		<MyNavbar />
		<ConfirmNewPasswordForm />
		<MyFooter />
	</div>
);
