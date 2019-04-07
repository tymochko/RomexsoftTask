import { SELECT_VIDEOS, UPDATE_VIDEOS_LIST } from './helpers/actionTypesNames';

const videosInitialState = {
  videos: [],
  selectedVideos: []
};

const videosReducer = (state = videosInitialState, action) => {
  switch (action.type) {
    case UPDATE_VIDEOS_LIST:
      return { ...state, videos: action.videos };
    case SELECT_VIDEOS:
      return { ...state, selectedVideos: action.selectedVideos };
    default:
      return state;
  }
};

export default videosReducer;
