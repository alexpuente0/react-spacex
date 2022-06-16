import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './rockets/RocketReducer';
import { missionReducer } from './missions/MissionsReducer';

const rootReducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
