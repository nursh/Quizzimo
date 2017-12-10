import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


import Art from './images/palette.png';
import History from './images/column.png';
import Science from './images/physics.png';

const styles = {
  card: {
    maxWidth: 300,
    margin: '0 auto',
    marginBottom: 30,
    paddingTop: '2em',
  },
  media: {
    width: 200,
    height: 200,
    margin: '0 auto',
  },
  link: {
    textDecoration: 'none',
  },
};

class Category extends React.Component {
  getImage = (category) => {
		switch (category) {
      case 'Art': return Art;
      case 'History': return History;
      case 'Science': return Science;
      default: return '';
    }
  }

  render() {
    const { category, classes } = this.props;
    return (
      <div>
        <Link to={`/quiz/${category}`} className={classes.link}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={this.getImage(category)}
              title={category}
            />
            <CardContent>
              <Typography type="display1" component="h2" align="center">
                {category}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  }
}


Category.propTypes = {
  category: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Category);
