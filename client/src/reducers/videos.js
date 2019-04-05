import { SEARCH_VIDEOS } from './helpers/actionTypesNames';

const videosInitialState = [];

const videosReducer = (state = videosInitialState, action) => {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return action.videos;
    default:
      return state;
  }
};

export default videosReducer;
