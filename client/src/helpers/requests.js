import fetch from 'isomorphic-fetch';

const jsonReqParams = {
    headers: {
        ['Accept']: 'application/json',
        ['Content-Type']: 'application/json',
        ['X-Requested-With']: 'XMLHttpRequest'
    },
    credentials: 'same-origin'
};

/**
 * Get HTTP POST request parameters
 * @param {Object} data - data
 * @returns {Object} new jsonReqParams
 */
const getPostReqParams = (data) => {
    return Object.assign({}, jsonReqParams, {
        method: 'PATCH',
        body: data && JSON.stringify(data)
    });
};

/**
 * Search videos by query
 * @param {String} query - query string
 * @returns {*} Promise
 */
export const searchByQueryRequest = (query) => {
  return fetch('/videos/search?query=' + query)
    .then(res => res.clone().json());
};

/**
 * Update videos by ids
 * @param {Object} video - video
 * @returns {*} Promise
 */
export const addToFavouritesRequest = (video) => {
  return fetch('/videos/' + video.id, getPostReqParams(video))
    .then(res => res.clone().json());
};

/**
 * Get favourite videos
 * @returns {*} Promise
 */
export const getFavouritesRequest = () => {
  return fetch('/videos/favourites')
    .then(res => res.clone().json());
};
