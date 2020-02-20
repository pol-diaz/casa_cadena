import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeView } from "./views/homeView";
import { RegisterView } from "./views/registerView";
import { SignInView } from "./views/signInView";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/ScrollToTop";
import { resetPasswordView } from "./views/resetPasswordView";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={HomeView} />
						<Route path="/register" component={RegisterView} />
						<Route path="/signInView" component={SignInView} />
						<Route path="/resetPassword" component={resetPasswordView} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Route path="/resetPassword" component={resetPasswordView} />{" "}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
