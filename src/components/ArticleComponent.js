import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const ArticleComponent = ({ article }) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={16}
  >
    <Grid item xs={8}>
      <div dangerouslySetInnerHTML={{ __html: article }} />
    </Grid>
  </Grid>
);

ArticleComponent.propTypes = {
  article: PropTypes.string.isRequired,
};

export default ArticleComponent;
