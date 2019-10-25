import React from 'react';

import PropTypes from 'prop-types';
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

ArticleBlockComponent.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default ArticleBlockComponent;
