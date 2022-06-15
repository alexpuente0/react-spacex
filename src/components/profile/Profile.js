/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
	const rocketState = useSelector((state) => state.rocketsReducer);
	const reservedRockets = rocketState.filter((item) => item.reserved === true);

	return (
		<div className="profile-container">
			<div className="rockets-profile">
				<h2 className="title">My Rockets</h2>
				<ul className="rockets">
					{reservedRockets.map((item) => (
						<li className="rockets-li" key={item.id}>
							{item.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
