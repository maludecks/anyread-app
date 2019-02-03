import React from 'react';
import { connect } from 'react-redux';

import './assets/App.css';
import UrlParserConnectedComponent from './components/UrlParserConnectedComponent';
import ArticleConnectedComponent from './components/ArticleConnectedComponent';

const App = () => (
  <div className="App">
    <UrlParserConnectedComponent />
    <ArticleConnectedComponent />
  </div>
);

export default connect()(App);
