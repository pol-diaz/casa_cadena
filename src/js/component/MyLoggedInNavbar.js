import React from "react";
import "../../styles/logged-in.scss";
import { AdCard } from "./AdCard";
import { Nav } from "react-bootstrap";
import logo from "../../img/logo-icon-white.png";

export const MyLoggedInNavbar = () => {
	return (
		<div>
			<div className="logged-in-navbar-img-styles">
				<img src={logo} className="navbar-img-styles mx-auto" />
			</div>
			<Nav
				variant="tabs"
				defaultActiveKey="/logged-in-view"
				classname="justify-content-center logged-in-navbar-styles">
				<div className="row mx-auto">
					<Nav.Item>
						<Nav.Link className="navbar-text-styles" href="/logged-in-view-ventas">
							Venta
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="navbar-text-styles" href="logged-in-view-compras">
							Compra
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="navbar-text-styles" href="logged-in-view-vendedores">
							Vendedores
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="navbar-text-styles" href="logged-in-view-historial">
							Historial
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="navbar-text-styles" href="logged-in-view-ajustes">
							Ajustes
						</Nav.Link>
					</Nav.Item>
				</div>
			</Nav>
		</div>
	);
};
