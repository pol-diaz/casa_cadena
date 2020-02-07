import { Card } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export const MyCarousel = props => {
	return (
		<div id="carouselExampleControls" className="carousel-styles" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img className="d-block w-100" src="https://via.placeholder.com/500x200" alt="First slide" />
				</div>
				<div className="carousel-item">
					<img className="d-block w-100" src="https://via.placeholder.com/500x200" alt="Second slide" />
				</div>
				<div className="carousel-item">
					<img className="d-block w-100" src="https://via.placeholder.com/500x200" alt="Third slide" />
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
