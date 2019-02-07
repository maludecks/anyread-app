import { PARSE_URL_SUCCEEDED, PARSE_URL_FAILED } from '../actions/urlParserActions';

const initialState = {
  article: '',
  url: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case PARSE_URL_SUCCEEDED: {
      const { article, success } = action.payload;

      if (!article.html) {
          return state;
      }

      return {
        ...state,
        article: article.html,
        success
      }
    }
    case PARSE_URL_FAILED: {
      const { success, message } = action.payload;

      return {
        ...state,
        success,
        message
      }
    }
    default:
      return state;
  }
}
