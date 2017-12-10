import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Options extends Component {
  state = {
    value: this.props.answer,
  }

  handleChange = (evt, value) => {
    this.setState({ value });
    this.props.setAnswer(value);
  }

  componentWillReceiveProps(nextProps) {
    const { answer } = this.props;
    if (answer !== nextProps.answer) {
      this.setState({ value: nextProps.answer });
    }
  }

  render() {
    const { value } = this.state;
    const { options, classes } = this.props; 
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            className={classes.group}
            value={value}
            onChange={this.handleChange}
          >
            {
              options.map(opt =>
                <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />)
            }
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

Options.propTypes = {
  options: PropTypes.array.isRequired,
  setAnswer: PropTypes.func.isRequired,
};

export default withStyles(styles)(Options);