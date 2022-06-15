/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";
import {
	reserveRocket,
	removeReservation,
} from "../../redux/rockets/RocketReducer";

const Rocket = ({ id, image, name, description, reserved }) => {
	const dispatch = useDispatch();

	const reserveShip = () => {
		dispatch(reserveRocket(id));
	};

	const cancelReservation = () => {
		dispatch(removeReservation(id));
	};

	return (
		<div className="rocket-container" id={id}>
			<img src={image} alt="rocket" className="rocket-image" />
			<div>
				<h2 className="name">{name}</h2>
				<p className="description">
					{reserved && <span className="span">Reserved</span>}
					{description}
				</p>
				{reserved && (
					<button
						className="cancel-btn"
						type="button"
						onClick={cancelReservation}
					>
						Cancel Reservation
					</button>
				)}
				{!reserved && (
					<button className="reserve-btn" type="button" onClick={reserveShip}>
						Reserve Rocket
					</button>
				)}
			</div>
		</div>
	);
};

export default Rocket;
