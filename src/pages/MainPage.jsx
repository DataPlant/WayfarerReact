import React from 'react'
import CityListPage from './CityListPage';
import CityShowPage from './CityShowPage';
import CityModel from '../models/CityModel';
import Sidebar from '../components/mainPageComponents/Sidebar';
import City from '../components/City';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  state = {
    cities: [],
    cityIdx: 0
  }

  updateCityIdx = (idx) => {
    // Anytime we update state we must call this.setState()
    // this.setState() will tell the component to rerender.
    this.setState({ cityIdx: idx });
  }

  componentDidMount() {
    console.log('did mount');

    CityModel.all().then((data) => {
      this.setState({ cities: data });
      console.log(data);

    });
  }


  render() {

    let cityNames = this.state.cities.map(city => {
      return city.cityname
    })

    let selectedCity = this.state.cities[this.state.cityIdx]

    let linkJsx = null

    if (selectedCity) {

     linkJsx = <Link className="navLink" to={`/about/${this.state.cities[this.state.cityIdx]._id}`}>
        <City city={selectedCity} /> 
      </Link>

    } else {
      linkJsx = ''
    }

    return (
      <div className="main-page">

        {/* <CityListPage cities={ this.state.cities } /> */}

        <Sidebar
          cityNames={cityNames}
          updateCityIdx={this.updateCityIdx}
        />

        <main className="category-info">
          <section className="category-detail">
            Learn More About...
          </section>
            {linkJsx}
        </main>

      </div>
    );
  }
}

export default MainPage;

  // 2 components:
  //    Sidebar
  //    CityDetails