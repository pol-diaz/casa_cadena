import React from "react";
import "../../styles/register.scss";
import { PostOrderForm } from "../component/PostOrderForm";
import { MyFooter } from "../component/MyFooter";
import { MyNavbar } from "../component/MyNavbar";

export const postOrderView = () => {
	return (
		<div>
			<MyNavbar />
			<PostOrderForm />
			<MyFooter />
		</div>
	);
};
