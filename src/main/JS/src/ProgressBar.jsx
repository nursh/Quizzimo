import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';

const styles = {
  root: {
    width: '80%',
    margin: '0 auto',
    marginTop: 30,
  },
};

const LinearDeterminate = ({ total, classes, answers }) => {
  const length = answers.length;
  const value = (length/total) * 100;
  return (
    <div className={classes.root}>
      <Typography type="headline"> {`${value}% complete`}</Typography>
      <LinearProgress mode="determinate" value={value} />
    </div>
  );
};

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  answers: PropTypes.array.isRequired,
};

export default withStyles(styles)(LinearDeterminate);