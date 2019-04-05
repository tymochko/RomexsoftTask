import { searchByQueryRequest } from '../helpers/requests';
import { SEARCH_VIDEOS } from '../reducers/helpers/actionTypesNames';

const searchVideos = (videos) => {
  return {
    type: SEARCH_VIDEOS,
    videos
  };
};

export const searchByQuery = (query, dispatch) => {
  return dispatch => {
    return searchByQueryRequest(query)
      .then(data => {
        dispatch(searchVideos(data));
        return data;
      });
  }
};
