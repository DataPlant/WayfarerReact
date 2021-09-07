import React from 'react';
import { Link } from 'react-router-dom';
import CityModel from '../models/CityModel';
import City from '../components/City';

class CityListPage extends React.Component {
    state = {
        cityData: []
    }

    componentDidMount() {
        console.log('did mount');
        
        CityModel.all().then((data) => {
            this.setState({ cityData: data });

        });
    }

    renderCities() {
        const citiesJSX = this.state.cityData.map((cityObj, idx) => {
            return (
              <Link to={`/cities/${cityObj._id}`}>
                <City key={idx} cityObj={cityObj} />
              </Link>
            );
          });
      
          return citiesJSX;
        }

    render() {
        return (
            <div>
            
                {this.renderCities()}
            </div>

        )
    }
}

export default CityListPage