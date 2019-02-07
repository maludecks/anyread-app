import { takeEvery } from 'redux-saga/effects';
import { parseUrl } from './actions/urlParserActions';

function* rootSagas() {
  yield takeEvery('PARSE_URL', parseUrl)
}

export default rootSagas;
