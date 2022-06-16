import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { joinMission } from '../../redux/missions/MissionsReducer';

const MissionItem = ({
  id, mission, description, reserved,
}) => {
  const dispatch = useDispatch();
  const handleJoinMission = (e) => {
    const missionId = e.target.className;
    dispatch(joinMission(missionId));
    if (!reserved) {
      toast.success('You just joined a mission successfully!');
    } else {
      toast.success('You just left a mission successfully!');
    }
  };

  return (
    <tr className="mission-container">
      <td className="mission-name">{mission}</td>
      <td>{description}</td>
      <td className="mission">
        {reserved ? (
          <span className="active-member">ACTIVE MEMBER</span>
        ) : (
          <span className="not-member">NOT A MEMBER</span>
        )}
      </td>
      <td className="join-mission">
        <button
          type="button"
          className={id}
          onClick={handleJoinMission}
          style={{
            color: reserved ? 'red' : 'black',
            border: reserved ? '2px solid red' : '2px solid black',
            borderRadius: '0.2rem',
            fontWeight: 'transparent',
            padding: '0.20rem',
            display: 'block',
            margin: 'auto',
            cursor: 'pointer',
          }}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default MissionItem;
