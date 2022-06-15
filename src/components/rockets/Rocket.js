/* eslint-disable */
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import {
	reserveRocket,
	removeReservation,
} from "../../redux/rockets/RocketReducer";
import { toast } from "react-toastify";

const Rocket = ({ id, image, name, description, reserved }) => {
	const dispatch = useDispatch();

	const reserveShip = () => {
		dispatch(reserveRocket(id));
		toast.success("Your Ship was reserved successfully!");
	};

	const cancelReservation = () => {
		dispatch(removeReservation(id));
		toast.success("Your Reservation was canceled successfully!");
	};

	return (
		<div className="rocket-container" id={id}>
			<img src={image} alt="rocket" className="rocket-image" />
			<div className="content">
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

Rocket.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	reserved: PropTypes.bool.isRequired,
};

export default Rocket;
