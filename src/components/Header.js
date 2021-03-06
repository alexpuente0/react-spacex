import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/planet.png';
import { fetchMissionData } from '../redux/missions/MissionsReducer';

const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const missionState = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  const fetchMissions = () => {
    if (missionState.length === 0) {
      dispatch(fetchMissionData());
    }
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
              Rockets
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
