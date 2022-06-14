/* eslint-disable */
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rocketsReducer } from "./rockets/RocketReducer";

const rootReducer = combineReducers({
	rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
