import React from 'react';
import Grid from '@material-ui/core/Grid';

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

export default ArticleComponent;
