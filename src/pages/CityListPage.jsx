import React from 'react';
import { Link } from 'react-router-dom';
import City from '../components/City';

class CityListPage extends React.Component {

  renderCities() {
    const citiesJSX = this.props.cities.map((cityObj, idx) => {
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