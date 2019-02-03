import { PARSE_URL } from '../actions/urlParserActions';

const initialState = {
  article: '',
  url: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case PARSE_URL:
      const { article, url } = action.payload;

      if (!article.html) {
          return state;
      }

      return {
        ...state,
        article: article.html,
        url
      }
    default:
      return state;
  }
}
