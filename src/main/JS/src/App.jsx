import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage.jsx';
import Header from './Header.jsx';
import Quiz from './Quiz.jsx';

export default () => (
  <Router>
    <Header>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/quiz/:category" component={Quiz} />
      </Switch>
    </Header>
	</Router>
);
