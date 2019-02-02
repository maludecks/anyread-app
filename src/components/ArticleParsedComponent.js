import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

class UrlParserFormComponent extends Component {
  render() {
    return (
      <div className="App-body">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={16}
          >
          <Grid item xs={8}>
            <div dangerouslySetInnerHTML={{__html: this.props.article }}></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default UrlParserFormComponent;
