/* eslint-disable */
import React from "react";
import MissionItem from "./MissionItem";
import { useSelector } from "react-redux";

const MissionList = () => {
	const missionState = useSelector((state) => state.missionReducer);

	return (
		<table className="missions-container ">
			<thead>
				<tr>
					<th style={{ width: "10%" }}>Mission</th>
					<th style={{ width: "60%" }}>Description</th>
					<th style={{ width: "15%" }}>Status</th>
					<th>Join</th>
				</tr>
			</thead>
			<tbody>
				{missionState.map((element) => (
					<MissionItem
						key={element.missionId}
						id={element.missionId}
						mission={element.missionName}
						description={element.missionDescription}
						reserved={element.reserved}
					/>
				))}
			</tbody>
		</table>
	);
};

export default MissionList;
