import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/homeView";
import { RegisterView } from "./views/registerView";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { MyNavbar } from "./component/MyNavbar";
import { Comofunciona } from "./component/Comofunciona";
import { MyFooter } from "./component/MyFooter";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<scrollToTop>
					<MyNavbar />
					<Switch>
						<Route exact path="/" component={HomeView} />
						<Route path="/register" component={RegisterView} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<MyFooter />
				</scrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
