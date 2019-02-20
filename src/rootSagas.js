import { takeEvery } from 'redux-saga/effects';
import { parseUrl } from './sagas/urlParserSagas';
import * as actionTypes from './constants/actionTypes';

function* rootSagas() {
  yield takeEvery(actionTypes.PARSE_URL, parseUrl);
}

export default rootSagas;
