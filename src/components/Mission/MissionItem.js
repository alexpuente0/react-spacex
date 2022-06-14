/* eslint-disable */
import React from "react";

const MissionItem = ({ id, mission, description, reserved }) => {
  
  return (
    <tr className="mission-container">
      <td className="mission-name">{mission}</td>
      <td>{description}</td>
      <td className="mission">
        <span className="active-member">Active Member</span>
        <span className="not-member">NOT A MEMBER</span>
      </td>
      <td className="join-mission">
        <button
          type="button"
          className={id}
          style={{
            color: "black",
            border: "2px solid black",
            borderRadius: "0.2rem",
            fontWeight: "transparent",
            padding: "0.20rem",
            display: "block",
            margin: "auto",
          }}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

export default MissionItem;
