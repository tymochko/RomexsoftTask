import { addToFavouritesRequest, getFavouritesRequest, searchByQueryRequest } from '../helpers/requests';
import {
  ADD_TO_FAVOURITES,
  SELECT_VIDEOS,
  UPDATE_VIDEOS_LIST,
} from '../reducers/helpers/actionTypesNames';

const updateVideosAction = (videos) => {
  return {
    type: UPDATE_VIDEOS_LIST,
    videos
  };
};

export const searchByQuery = (query) => {
  return dispatch => {
    return searchByQueryRequest(query)
      .then(data => {
        dispatch(updateVideosAction(data));
        return data;
      });
  }
};

export const selectVideosAction = (selectedVideos) => {
  return {
    type: SELECT_VIDEOS,
    selectedVideos
  };
};

export const addToFavouritesAction = (videos) => {
  return {
    type: ADD_TO_FAVOURITES,
    videos
  };
};

export const addToFavourites = (selectedVideo) => {
  return dispatch => {
    return addToFavouritesRequest(selectedVideo)
      .then(data => {
        return data;
      });
  }
};

export const getFavourites = () => {
  return dispatch => {
    return getFavouritesRequest()
      .then(data => {
        dispatch(selectVideosAction([]));
        dispatch(updateVideosAction(data));
        return data;
      });
  }
};
