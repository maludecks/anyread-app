import React from 'react';

import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ErrorMessageComponent = ({ message, shouldShow }) => {
  return (
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
}

const mapStateToProps = (state) => {
  return {
    message: state.reader.message
  }
};

export default connect(
  mapStateToProps,
  null
)(ErrorMessageComponent);
