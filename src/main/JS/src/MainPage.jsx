import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import 'whatwg-fetch';


import Category from './Category.jsx';

const styles = theme => ({
  root: {
    'margin-top': '20px',
  },
});

class MainPage extends Component {
	state = {
		categories: [],
	};

	componentDidMount() {
		fetch('/categories')
			.then(res => res.json())
			.then(data => this.setState({ categories: data }))
			.catch(err => console.error(err));
	}

	render() {
    const { classes } = this.props;
		const categories = this.state.categories.map(cat =>
			<Category
				category={cat.name}
				key={cat.name}
			/>,
		);
		return (
			<div>
        <Typography
          align='center'
          type='display2'
          gutterBottom
          className={classes.root}
        >
          Choose a Category:
        </Typography>
				{	categories }
			</div>
		);
	}
}

export default withStyles(styles) (MainPage);

