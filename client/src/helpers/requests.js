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
    return assign({}, jsonReqParams, {
        method: 'POST',
        body: data && JSON.stringify(data)
    });
};

export const searchByQueryRequest = (query, dispatch) => {
    return fetch('/videos/search?query=britney', jsonReqParams)
        .then(res => {
            console.log(res);
        });
};
