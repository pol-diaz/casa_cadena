import { Card } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export const MyCarousel = props => {
	return (
		<div id="carouselExampleControls" className="carousel-styles" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						src="https://i.pinimg.com/originals/49/81/1b/49811bd2de9f997fa0b0e561441624ed.jpg"
						alt="First slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg"
						alt="Second slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src="https://www.topmanzana.com/Imagenes/10-mejores-apps-fondos-hd-iphone-ipad.jpg"
						alt="Third slide"
					/>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
