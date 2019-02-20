import { PARSE_URL_SUCCEEDED, PARSE_URL_FAILED } from '../constants/actionTypes';

const initialState = {
  article: '',
  url: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PARSE_URL_SUCCEEDED: {
      const { article, success } = action.payload;

      if (!article) {
        return state;
      }

      return {
        ...state,
        article,
        success,
      };
    }
    case PARSE_URL_FAILED: {
      const { success, message } = action.payload;

      return {
        ...state,
        success,
        message,
      };
    }
    default:
      return state;
  }
}
