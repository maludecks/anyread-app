import { PARSE_URL_SUCCEEDED } from '../actions/urlParserActions';

const initialState = {
  article: '',
  url: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case PARSE_URL_SUCCEEDED:
      const { article } = action.payload;

      if (!article.html) {
          return state;
      }

      return {
        ...state,
        article: article.html
      }
    default:
      return state;
  }
}
