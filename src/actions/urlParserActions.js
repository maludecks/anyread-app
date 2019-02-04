import axios from 'axios';

/*
* action types
*/
export const PARSE_URL = 'PARSE_URL';
export const PARSE_URL_SUCCEEDED = 'PARSE_URL_SUCCEEDED';
export const PARSE_URL_FAILED = 'PARSE_URL_FAILED';

/*
* action creators
*/
export function parseUrl(url) {
  return function(dispatch, getState) {
    const apiUrl = `http://localhost/reader?url=${url}`;

    return axios.get(apiUrl)
      .then(function(res) {
        const article = res.data;
        dispatch(parseUrlSucceeded(article))
      })
      .catch(function(err) {
        console.log(err);
        // dispatch(parseUrlFailed);
      });
  }
}

export function parseUrlSucceeded(article) {
  return {
    type: PARSE_URL_SUCCEEDED,
    payload: {
      article
    }
  }
}

export function parseUrlFailed() {
  return {
    type: PARSE_URL_FAILED
  }
}
