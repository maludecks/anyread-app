import { combineReducers } from 'redux';
import urlParserReducer from './reducers/urlParserReducer';

const rootReducer = combineReducers({
  reader: urlParserReducer,
});

export default rootReducer;
