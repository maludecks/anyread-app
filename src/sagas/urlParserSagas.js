import { call, put } from 'redux-saga/effects';
import { getArticleParsed } from '../repositories/urlParserRepository';
import { PARSE_URL_SUCCEEDED, PARSE_URL_FAILED } from '../constants/actionTypes';

export function* parseUrl({ payload: url }) {
  try {
    const data = yield call(() => getArticleParsed(url));

    yield put({
      type: PARSE_URL_SUCCEEDED,
      payload: {
        article: data.article.content,
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
