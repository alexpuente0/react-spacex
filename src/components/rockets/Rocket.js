/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";
import { reserveRocket } from "../../redux/rockets/RocketReducer";

const Rocket = ({ id, image, name, description, reserved }) => {
	const dispatch = useDispatch();

	const reserveShip = () => {
		dispatch(reserveRocket(id));
	};

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

				<button className="reserve-btn" type="button" onClick={reserveShip}>
					Reserve Rocket
				</button>
			</div>
		</div>
	);
};

export default Rocket;
