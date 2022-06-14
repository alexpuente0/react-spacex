/* eslint-disable */
import React from "react";

const Rocket = ({ id, image, name, description, reserved }) => {
	return (
		<div className="rocket-container" id={id}>
			<img src={image} alt="rocket" className="rocket-image" />
			<div>
				<h2 className="name">{name}</h2>
				<p className="description">
					<span className="span">Reserved</span>
					{description}
				</p>

				<button className="cancel-btn" type="button">
					Cancel Reservation
				</button>

				<button className="reserve-btn" type="button">
					Reserve Rocket
				</button>
			</div>
		</div>
	);
};

export default Rocket;
