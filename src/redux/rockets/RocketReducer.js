/* eslint-disable */
//Action Types
const GET_ROCKETS = "GET_ROCKETS";
//URL
const URL = "https://api.spacexdata.com/v3/rockets";
//Action Creators
export const rocketsData = (payload) => ({
	type: GET_ROCKETS,
	payload,
});

//Reducer
const initialState = [];
export const rocketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ROCKETS:
			return action.payload;
		default:
			return state;
	}
};

//Async Thunk Function
export const getRockets = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	const rockets = [];
	data.forEach((rocket) => {
		rockets.push({
			id: rocket.id,
			name: rocket.rocket_name,
			description: rocket.description,
			image: rocket.flickr_images[0],
			reserved: false,
		});
	});
	return rockets;
};
