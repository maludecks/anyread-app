import React from 'react';

import { connect } from 'react-redux';
import ArticleConnectedComponent from './ArticleConnectedComponent';
import ErrorMessageComponent from './ErrorMessageComponent';

const ArticleBlockComponent = ({ success }) => {

  let articleBlock;

  if (success) {
    articleBlock = <ArticleConnectedComponent />
  } else {
    articleBlock = <ErrorMessageComponent />
  }

  return (<div className="App-body">
      {articleBlock}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    success: state.reader.success
  }
};

export default connect(
  mapStateToProps,
  null
)(ArticleBlockComponent);
