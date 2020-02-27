import React from "react";
import "../../styles/resetPasswordEmailSent.scss";
import { MyNavbar } from "../component/MyNavbar";
import { MyFooter } from "../component/MyFooter";
import { TermsDocumment } from "../component/TermsDocumment";

export const terminosView = () => (
	<div>
		<MyNavbar />
		<TermsDocumment />
		<MyFooter />
	</div>
);
