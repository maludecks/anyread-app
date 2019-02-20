import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class UrlParserComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { parseUrl, url } = this.props;

    parseUrl(url);
  }

  handleChange = (event) => {
    this.setState({ url: event.target.value });
  }

  render() {
    return (
      <header className="App-header">
        <form onSubmit={this.handleSubmit}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={16}
          >
            <Grid item xs={12}>
              <h1>anyread</h1>
            </Grid>
            <Grid item xs={8}>
              <Input
                fullWidth
                autoFocus
                placeholder="http://article-url-goes-here.com"
                onChange={this.handleChange}
              />
            </Grid>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
            >
                GO!
            </Button>
          </Grid>
        </form>
      </header>
    );
  }
}

UrlParserComponent.propTypes = {
  url: PropTypes.string.isRequired,
  parseUrl: PropTypes.func.isRequired
};

export default UrlParserComponent;
