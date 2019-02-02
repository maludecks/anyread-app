import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class UrlParserFormComponent extends Component {
  render() {
    return (
      <header className="App-header">
          <form onSubmit={this.props.handleSubmit}>
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
                  onChange={this.props.handleChange}
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

export default UrlParserFormComponent;
