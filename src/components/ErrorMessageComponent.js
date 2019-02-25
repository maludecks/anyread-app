import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ErrorMessageComponent = ({ message }) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={16}
  >
    <Grid item xs={8}>
      <Typography variant="h6" align="center">
        { message }
      </Typography>
    </Grid>
  </Grid>
);

export default ErrorMessageComponent;
