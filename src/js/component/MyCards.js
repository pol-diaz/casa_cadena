import { Card } from "react-bootstrap";
import React from "react";
import profile from "../../img/profile-purple.png";
import phone from "../../img/phone-purple.png";
import money from "../../img/money-purple.png";
import handshake from "../../img/handshake-purple.png";
import "bootstrap/dist/css/bootstrap.css";
export const MyCards = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-10 col-md-3 my-0 mx-auto">
					<Card className="border-0">
						<Card.Img className="card-img-styles" variant="top" src={profile} />
						<Card.Body>
							<Card.Title className="card-title-styles">{"Escoge Un Anuncio"}</Card.Title>
							<Card.Text className="card-description-styles">
								{"Selecciona el anuncio con la oferta más atractiva."}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col-10 col-md-3 my-0 mx-auto">
					<Card className="border-0">
						<Card.Img className="card-img-styles" variant="top" src={phone} />
						<Card.Body>
							<Card.Title className="card-title-styles">{"Contacta Al Anunicante"}</Card.Title>
							<Card.Text className="card-description-styles">
								{"Comunícate con el vendedor o comprador que publicó el anuncio seleccionado."}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col-10 col-md-3 my-0 mx-auto">
					<Card className="border-0">
						<Card.Img className="card-img-styles" variant="top" src={money} />
						<Card.Body>
							<Card.Title className="card-title-styles">{"Realiza el Pago"}</Card.Title>
							<Card.Text className="card-description-styles">
								{"Efectúa el pago correspondiente para poder recibir el dinero del anuncio."}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col-10 col-md-3 my-0 mx-auto">
					<Card className="border-0">
						<Card.Img className="card-img-styles" variant="top" src={handshake} />
						<Card.Body>
							<Card.Title className="card-title-styles">{"Califícalo"}</Card.Title>
							<Card.Text className="card-description-styles">
								{"Califica la reputación de la persona con la que has negociado la compra o venta."}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};
