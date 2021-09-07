import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CityListPage from '../pages/CityListPage';
import CityShowPage from '../pages/CityShowPage';
import CreatePostShowPage from '../pages/CreatePostShowPage';

function Routes() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cities' component={CityListPage} />
        <Route path='/posts/new' component={CreatePostShowPage} />
        <Route path='/cities/:id' render={(props) => <CityShowPage {...props} />} />
      </Switch>
    );
  }
  
  export default Routes;