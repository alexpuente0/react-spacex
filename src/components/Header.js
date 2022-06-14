import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../assets/planet.png';
import { fetchMissionData } from '../redux/missions/MissionsReducer';

const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const dispatch = useDispatch();
  const fetchMissions = () => {
    dispatch(fetchMissionData());
  };

  return (
    <header>
      <nav>
        <div className="title-container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="header">Space Traveler&apos; Hub</h1>
        </div>
        <ul className="list-container">
          <li>
            <NavLink
              to="/"
              className="rockets"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Rockes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={fetchMissions}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myprofile"
              className="profile"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr className="line" />
    </header>
  );
};

export default Header;
