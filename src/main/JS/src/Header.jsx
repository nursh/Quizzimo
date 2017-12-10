import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { teal } from 'material-ui/colors';
import { Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    background: teal[700],
  },
  div: {
    width: '100%',
  },
  title: {
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
  }
});

class Header extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.div}>
        <AppBar position='static' className={classes.root}>
          <Toolbar>
            <Link to="/" className={classes.link}>
              <Typography type='title' className={classes.title}>
                Quizzimo
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        {children}
      </div>    
    );
  }
}

export default withStyles(styles) (Header);
