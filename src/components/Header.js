import React from "react";
import logo from "../assets/planet.png";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<div className="title-container">
					<img src={logo} alt="logo" className="logo" />
					<h1 className="header">Space Traveler&apos; Hub</h1>
				</div>
				<ul className="list-container">
					<li>Rockets</li>
					<li>Missions</li>
					<li>My Profile</li>
				</ul>
			</nav>
			<hr className="line" />
		</header>
	);
};

export default Header;
