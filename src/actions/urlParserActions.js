import { call, put } from 'redux-saga/effects';
import { getArticleParsed } from '../repositories/urlParserRepository';

/*
* action types
*/
export const PARSE_URL = 'PARSE_URL';
export const PARSE_URL_SUCCEEDED = 'PARSE_URL_SUCCEEDED';
export const PARSE_URL_FAILED = 'PARSE_URL_FAILED';

/*
* action creators
*/
export function* parseUrl({ payload }) {
  try {
    const { url } = payload;
    const article = yield call(() => getArticleParsed(url));

    yield put({
      type: PARSE_URL_SUCCEEDED,
      payload: {
        article,
        success: true
      }
    });
  } catch(e) {
    yield put({
      type: PARSE_URL_FAILED,
      payload: {
        success: false,
        message: 'An error occurred trying to read the url :('
      }
    });
  }
}
