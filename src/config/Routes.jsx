import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CityListPage from '../pages/CityListPage';
import CityShowPage from '../pages/CityShowPage';
import CreatePostShowPage from '../pages/CreatePostShowPage';
import MainPage from '../pages/MainPage';
import CreateCityShowPage from '../pages/CreateCityShowPage';

function Routes() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/allcities' component={CityListPage} /> */}
        <Route exact path='/cities/new' component={CreateCityShowPage} />
        <Route path='/cities' component={ MainPage } />
        <Route exact path='/posts/new' component={CreatePostShowPage} />
        
        <Route path='/about/:id' render={(props) => <CityShowPage {...props} />} />
      </Switch>
    );
  }
  
  export default Routes;