import React from 'react';
import { connect } from 'react-redux';

import './assets/App.css';
import UrlParserContainer from './containers/UrlParserContainer';
import ArticleBlockContainer from './containers/ArticleBlockContainer';

const App = () => (
  <div className="App">
    <UrlParserContainer />
    <ArticleBlockContainer />
  </div>
);

export default connect()(App);
