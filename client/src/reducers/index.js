import { combineReducers } from 'redux';
import videosReducer from './videos';
import visibilityReducer from './visibilityFilters';

const rootReducer = combineReducers({
  videosData: videosReducer,
  visibilityFilter: visibilityReducer
});

export default rootReducer;
