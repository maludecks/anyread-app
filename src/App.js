import React, { Component } from 'react';

import './App.css';
import UrlParserFormComponent from './components/UrlParserFormComponent';
import ArticleParsedComponent from './components/ArticleParsedComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: '',
      inputUrl: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({inputUrl: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.inputUrl === '')
      return;

    const requestUrl = `http://localhost/reader?url=${this.state.inputUrl}`;
    fetch(requestUrl)
      .then(response => {
        return response.json();
      })
      .then(articleJson => {
        return this.setState({ article: articleJson.data.html });
      });
  }

  render() {
    return (
      <div className="App">
        <UrlParserFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ArticleParsedComponent article={this.state.article} />
      </div>
    );
  }
}

export default App;
