import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { red, green } from 'material-ui/colors';
import 'whatwg-fetch';

import ProgressBar from './ProgressBar.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    background: red[400],
  },
  right: {
    background: green[400],
  },
  buttons: {
    margin: '0 auto',
    width: '80%',
  },
  next: {
    float: 'right',
  },
});

class Quiz extends Component {

  state = {
    currentQuestion: {},
    questions: [],
    category: this.props.match.params.category,
    answers: [],
    progress: 0,
    total: 0,
    quizFinished: false,
    showNext: false,
    dataLoaded: false,
  };



  componentWillMount() {
    console.log('Data');
    const { progress, category } = this.state;
    fetch(`/questions/categories/${category}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          questions: data,
          total: data.length,
          currentQuestion: data[progress],
        }, this.dataLoaded);
      })
      .catch(err => console.error(err));
  }

  dataLoaded = () => {
    this.setState({ dataLoaded: true });
  }

  setAnswer = (value) => {
    const { answers, progress } = this.state;
    answers[progress] = value;
    this.setState({
      answers,
      showNext: true,
    });
  }

  prevQuestion = () => {
    this.setState((prev) => ({
      progress: prev.progress - 1,
      currentQuestion: prev.questions[prev.progress - 1],
      showNext: true,
    }));
  }

  nextQuestion = () => {
    const { progress, total, answers } = this.state;
    if (progress === (total - 1)) this.setState({ quizFinished: true });
    this.setState((prev) => ({
      progress: prev.progress + 1,
      currentQuestion: prev.questions[prev.progress + 1],
      showNext: answers[prev.progress + 1] ? true : false,
    }));
  }

  render() {
    const {
      category,
      progress,
      total,
      currentQuestion,
      quizFinished,
      questions,
      answers,
      showNext,
      dataLoaded,
    } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Typography align='center' type='display3'>{`${category}`}</Typography>
        {
          !dataLoaded ? '' :
          !quizFinished ?
            <div>
              <ProgressBar
                total={total}
                progress={progress}
                answers={answers}
              />
              <Question
                question={currentQuestion}
                setAnswer={this.setAnswer}
                answer={answers[progress]}
              />
            </div>

          :
            <Answer
              questions={questions}
              answers={answers}
            />
        }

        {
          !quizFinished ?
            <div className={classes.buttons}>
              <Button
                className={`${classes.button} ${classes.left}`}
                raised
                {...(progress === 0 && { disabled: true})}
                color="accent"
                onClick={this.prevQuestion}
              >
                Prev
              </Button>
              <Button
                className={`${classes.button} ${classes.right} ${classes.next}`}
                raised
                color="accent"
                {...(!showNext && { disabled: true })}
                onClick={this.nextQuestion}
              >
                { 
                  (progress !== (total - 1))
                    ? 'Next' : 'Finish'
                }
              </Button>
            </div>
          : ''
        }
      </div>
    );
  }
}

export default withStyles(styles)(Quiz);