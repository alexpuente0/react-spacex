import React from 'react';
import { useSelector } from 'react-redux';
import MissionProfile from './MissionProfile';

const Profile = () => {
  const rocketState = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rocketState.filter((item) => item.reserved === true);

  const missionState = useSelector((state) => state.missionReducer);
  const reservedMissions = missionState.filter(
    (item) => item.reserved === true,
  );

  return (
    <div className="profile-container">
      <div className="rockets-profile">
        <h2 className="title">My Missions</h2>
        <div className="rockets">
          {reservedMissions.map((item) => (
            <MissionProfile key={item.missionId} name={item.missionName} />
          ))}
        </div>
      </div>
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
