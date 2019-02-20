import { createAction } from 'redux-actions';
import * as actionTypes from '../constants/actionTypes';

/*
* action creators
*/
export const parseUrl = createAction(actionTypes.PARSE_URL, url => url);
