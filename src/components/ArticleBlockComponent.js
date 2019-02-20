import React from 'react';

import ArticleContainer from '../containers/ArticleContainer';
import ErrorMessageContainer from '../containers/ErrorMessageContainer';

const ArticleBlockComponent = ({ success }) => {
  let articleBlock;

  if (success) {
    articleBlock = <ArticleContainer />;
  } else {
    articleBlock = <ErrorMessageContainer />;
  }

  return (
    <div className="App-body">
      { articleBlock }
    </div>
  );
};

export default ArticleBlockComponent;
