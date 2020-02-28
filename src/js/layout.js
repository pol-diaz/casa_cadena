import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeView } from "./views/homeView";
import { RegisterView } from "./views/registerView";
import { SignInView } from "./views/signInView";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/ScrollToTop";
import { resetPasswordView } from "./views/resetPasswordView";
import { resetPasswordEmailSentView } from "./views/resetPasswordEmailSentView";
import { confirmNewPasswordView } from "./views/confirmNewPasswordView";
import { changedPasswordView } from "./views/changedPasswordView";
import { userRegisteredView } from "./views/userRegisteredView";
import { LoggedInView } from "./views/loggedInView";
import { LoggedInViewVentas } from "./views/loggedInViewVentas";
import { LoggedInViewCompras } from "./views/loggedInViewCompras";
import { LoggedInViewVendedores } from "./views/loggedInViewVendedores";
import { LoggedInViewHistorial } from "./views/loggedInViewHistorial";
import { LoggedInViewAjustes } from "./views/loggedInViewAjustes";

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
						<Route path="/logged-in-view" component={LoggedInView} />
						<Route path="/logged-in-view-ventas" component={LoggedInViewVentas} />
						<Route path="/logged-in-view-compras" component={LoggedInViewCompras} />
						<Route path="/logged-in-view-vendedores" component={LoggedInViewVendedores} />
						<Route path="/logged-in-view-historial" component={LoggedInViewHistorial} />
						<Route path="/logged-in-view-ajustes" component={LoggedInViewAjustes} />
						<Route path="/resetPassword" component={resetPasswordView} />
						<Route path="/resetPassword-emailSent" component={resetPasswordEmailSentView} />
						<Route path="/confirm-new-password" component={confirmNewPasswordView} />
						<Route path="/changed-password" component={changedPasswordView} />
						<Route path="/user-registered" component={userRegisteredView} />

						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
