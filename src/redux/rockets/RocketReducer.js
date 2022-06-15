/* eslint-disable */
//Action Types
const GET_ROCKETS = "GET_ROCKETS";
const RESERVE_ROCKET = "RESERVE_ROCKET";
const REMOVE_RESERVATION = "REMOVE_RESERVATION";
//URL
const URL = "https://api.spacexdata.com/v3/rockets";
//Action Creators
export const rocketsData = (payload) => ({
	type: GET_ROCKETS,
	payload,
});

export const reserveRocket = (id) => ({
	type: RESERVE_ROCKET,
	id,
});

export const removeReservation = (id) => ({
	type: REMOVE_RESERVATION,
	id,
});

//Reducer
const initialState = [];
export const rocketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ROCKETS:
			return action.payload;

		case RESERVE_ROCKET:
			return state.map((rocket) => {
				if (rocket.id !== action.id) {
					return rocket;
				}
				return { ...rocket, reserved: true };
			});

		case REMOVE_RESERVATION:
			return state.map((rocket) => {
				if (rocket.id !== action.id) {
					return rocket;
				}
				return { ...rocket, reserved: false };
			});

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
