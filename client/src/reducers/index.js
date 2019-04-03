import { combineReducers } from 'redux';
import videosReducer from './videos';
import filtersReducer from './visibilityFilters';

export default combineReducers({
  videosReducer,
  filtersReducer
});
