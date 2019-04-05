import { combineReducers } from 'redux';
import videosReducer from './videos';
import filtersReducer from './visibilityFilters';

const rootReducer = combineReducers({
  videos: videosReducer,
  filters: filtersReducer
});

export default rootReducer;
