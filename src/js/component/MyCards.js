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
				<div className="col-10 col-md-3 my-3 mx-auto">
					<Card className="border-0">
						<Card.Img className="card-img-styles" variant="top" src={profile} />
						<Card.Body>
							<Card.Title className="card-title-styles">{"titulo"}</Card.Title>
							<Card.Text className="card-description-styles">
								{
									"Some quick example text to build on the card title and make up the bulk of the card's content."
								}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col-10 col-md-3 my-3 mx-auto">
					<Card className="border-0">
						<Card.Img className="card-img-styles" variant="top" src={phone} />
						<Card.Body>
							<Card.Title className="card-title-styles">{"titulo"}</Card.Title>
							<Card.Text className="card-description-styles">
								{
									"Some quick example text to build on the card title and make up the bulk of the card's content."
								}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col-10 col-md-3 my-3 mx-auto">
					<Card className="border-0">
						<Card.Img className="card-img-styles" variant="top" src={money} />
						<Card.Body>
							<Card.Title className="card-title-styles">{"titulo"}</Card.Title>
							<Card.Text className="card-description-styles">
								{
									"Some quick example text to build on the card title and make up the bulk of the card's content."
								}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col-10 col-md-3 my-3 mx-auto">
					<Card className="border-0">
						<Card.Img className="card-img-styles" variant="top" src={handshake} />
						<Card.Body>
							<Card.Title className="card-title-styles">{"titulo"}</Card.Title>
							<Card.Text className="card-description-styles">
								{
									"Some quick example text to build on the card title and make up the bulk of the card's content."
								}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};
