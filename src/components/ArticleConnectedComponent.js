import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

const ArticleComponent = ({ article }) => {
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
          <div dangerouslySetInnerHTML={{__html: article }}></div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    article: state.reader.article
  }
}

export default connect(
  mapStateToProps
)(ArticleComponent);
