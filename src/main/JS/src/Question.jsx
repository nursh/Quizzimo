import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Options from './Options.jsx';

const styles = theme => ({
  card: {
    margin: '0 auto',
    marginTop: 60,
    maxWidth: '60%',
  },
});

const Question = ({ question, classes, setAnswer, answer }) => {
  const { question: text, options } = question;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline">{text} ?</Typography>
          <Options options={options} setAnswer={setAnswer} answer={answer} />
        </CardContent>
      </Card>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  setAnswer: PropTypes.func.isRequired,
};

export default withStyles(styles) (Question);

