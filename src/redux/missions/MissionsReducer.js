// Action Types
const FETCH_MISSION = 'FETCH_MISSION';
const JOIN = 'JOIN';

// URL
const URL = 'https://api.spacexdata.com/v3/missions';

// Action Creators
export const joinMission = (id) => ({
  type: JOIN,
  payload: id,
});

// Asinc Thunk Function
export const fetchMissionData = () => async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  const missions = [];
  data.forEach((item) => {
    missions.push({
      missionName: item.mission_name,
      missionId: item.mission_id,
      missionDescription: item.description,
      reserved: false,
    });
  });

  dispatch({
    type: FETCH_MISSION,
    payload: missions,
  });
};

// Reducer
const initialState = [];
export const missionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case JOIN: {
      const newState = state.map((element) => {
        if (element.missionId !== action.payload) {
          return element;
        }
        if (element.reserved === true) {
          return { ...element, reserved: false };
        }
        return { ...element, reserved: true };
      });
      return newState;
    }

    case FETCH_MISSION:
      return action.payload;
    default:
      return state;
  }
};
