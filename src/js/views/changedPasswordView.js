import React from "react";
import "../../styles/resetPasswordEmailSent.scss";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { ResetPasswordEmailSentJumbo } from "../component/ResetPasswordEmailSentJumbo";
import { ChangedPasswordJumbo } from "../component/ChangedPasswordJumbo";

export const changedPasswordView = () => (
	<div>
		<MyNavbar />
		<ChangedPasswordJumbo />
		<MyFooter />
	</div>
);
