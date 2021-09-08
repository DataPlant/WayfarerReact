import React from 'react'
import CityListPage from './CityListPage';
import CityShowPage from './CityShowPage';
import CityModel from '../models/CityModel';

class MainPage extends React.Component {

    state = {
        cities: [],
        posts: []
    }

    componentDidMount() {
        console.log('did mount');
        
        CityModel.all().then((data) => {
            this.setState({ cities: data });

        });
    }

  
    render() {
      

    
      return (
        <div className="main-page">

            <CityListPage cities={ this.state.cities } />

        </div>
      );
    }
  }
  
  export default MainPage;