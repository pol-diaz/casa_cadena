import React from "react";
import "../../styles/resetPasswordEmailSent.scss";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { ResetPasswordEmailSentJumbo } from "../component/ResetPasswordEmailSentJumbo";

export const resetPasswordEmailSentView = () => (
	<div>
		<MyNavbar />
		<ResetPasswordEmailSentJumbo />
		<MyFooter />
	</div>
);
