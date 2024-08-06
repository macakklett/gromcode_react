import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import User from './User';

const App = () => {
  return (
    <div class="page">
      <div class="page__content">
        <h1>Users</h1>
        <BrowserRouter>
          <ul class="navigation">
            <li class="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li class="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <span>Select a user please</span>
            </Route>
            <Route path="/users/:userId">
              <User />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
