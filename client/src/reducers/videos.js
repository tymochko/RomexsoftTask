import { SEARCH_VIDEOS, SELECT_VIDEOS } from './helpers/actionTypesNames';

const videosInitialState = {
  videos: [],
  selectedVideos: {}
};

const videosReducer = (state = videosInitialState, action) => {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return action.videos;
    case SELECT_VIDEOS:
      return action.selectedVideos;
    default:
      return state;
  }
};

export default videosReducer;
