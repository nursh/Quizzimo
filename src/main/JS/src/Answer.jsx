import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { teal, red } from 'material-ui/colors';


const styles = theme => ({
  card: {
    margin: '0 auto',
    marginTop: 60,
    maxWidth: '60%',
  },
  question: {
    marginTop: 20,
  },
  right: {
    color: teal[600],
  },
  wrong: {
    color: red[600],
  },
  button: {
    textDecoration: 'none',
    float: 'right',
    marginTop: 20,
    marginBottom: 30,
    color: '#fff',
    padding: 20,
    background: teal[400],
  },
  answer: {
    color: '#000',
  }
});

const Answer = ({ questions, classes, answers }) => {
  const correctAnswers = questions.filter((q, i) => q.answer === answers[i]);
  const correct = correctAnswers.length;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="display1" align="center"  className={classes.answer}>
            You got {correct} of {questions.length} correct.
          </Typography>
          {
            questions.map((q, i) => {
              return (
                <div key={q.answer} className={classes.question}>
                  <Typography type="headline">{q.question}</Typography>
                  <Typography
                    type="subheading"
                    gutterBottom
                  >
                    {
                      q.answer === answers[i]
                      ? <div>
                          <span>Your answer: </span>
                          <span className={classes.right}>{answers[i]}</span>
                        </div>

                      : <div>
                          <span>Your answer: </span>
                          <span className={classes.wrong}>{answers[i]}</span>
                          <br />
                          <span>Correct answer: </span>
                          <span className={classes.right}>{q.answer}</span>
                        </div>
                    }
                  </Typography>
                </div>
              );
            })
          }
        </CardContent>
        <Link
          className={classes.button}
          to="/"
        >
          Back to Main Page
        </Link>
      </Card>
    </div>
  );
}

Answer.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
};

export default withStyles(styles)(Answer);
