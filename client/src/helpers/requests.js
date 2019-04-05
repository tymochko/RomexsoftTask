import fetch from 'isomorphic-fetch';

// const extractJsonResponse = (response) => {
//   return response.clone().json()
//     .catch(e => {
//       console.error(e);
//       return response.clone().text();
//     });
// };

// const jsonReqParams = {
//     headers: {
//         ['Accept']: 'application/json',
//         ['Content-Type']: 'application/json',
//         ['X-Requested-With']: 'XMLHttpRequest'
//     },
//     credentials: 'same-origin'
// };

/**
 * Get HTTP POST request parameters
 * @param {Object} data - data
 * @returns {Object} new jsonReqParams
 */
// const getPostReqParams = (data) => {
//     return Object.assign({}, jsonReqParams, {
//         method: 'POST',
//         body: data && JSON.stringify(data)
//     });
// };

/**
 * Search videos by query
 * @param {String} query - query string
 * @returns {*} Promise
 */
export const searchByQueryRequest = (query) => {
  return fetch('/videos/search?query=' + query)
    .then(res => res.clone().json());
};

// Add to favourite:
//   http://localhost:6001/videos/0aEnnH6t8Ts(=id)
//     (PATCH)
// body should include:
// {
//   "isFavourite": true
// }
// if you want to add a video or be empty if you want to remove
//
// Get saved videos:
//   http://localhost:6001/videos/favourites
//     (GET)
