import PropTypes from 'prop-types';
import React from 'react';

const MissionProfile = ({ name }) => <div className="rockets-li">{name}</div>;

MissionProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MissionProfile;
