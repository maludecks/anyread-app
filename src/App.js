import React from 'react';
import { connect } from 'react-redux';

import './assets/App.css';
import UrlParserConnectedComponent from './components/UrlParserConnectedComponent';
import ArticleBlockComponent from './components/ArticleBlockComponent';

const App = () => (
  <div className="App">
    <UrlParserConnectedComponent />
    <ArticleBlockComponent />
  </div>
);

export default connect()(App);
