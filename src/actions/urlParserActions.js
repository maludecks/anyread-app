import { createAction } from 'redux-actions';
import * as actionTypes from '../constants/actionTypes';

/*
* action creators
*/

// eslint-disable-next-line import/prefer-default-export
export const parseUrl = createAction(actionTypes.PARSE_URL, url => url);
