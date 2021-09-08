import React from 'react'
import CityListPage from './CityListPage';
import CityShowPage from './CityShowPage';
import CityModel from '../models/CityModel';
import PostModel from '../models/PostModel'
import Sidebar from '../components/mainPageComponents/Sidebar';
import City from '../components/City';
import { Link } from 'react-router-dom';
import CityPosts from '../components/CityPosts';


class MainPage extends React.Component {

    state = {
        cities: [],
        cityIdx: 0,
        posts: [],
    }

  updateCityIdx = (idx) => {
    // Anytime we update state we must call this.setState()
    // this.setState() will tell the component to rerender.
    this.setState({ cityIdx: idx });
  }

  componentDidMount() {
    console.log('did mount');
        
    CityModel.all().then((citydata) => {
      this.setState({ cities: citydata })
    })
    PostModel.all().then((postdata) => {
      this.setState({ posts: postdata })
    })
  }

  render() {

    let cityNames = this.state.cities.map((city) => {
      return city.cityname
    })

    let selectedCity = this.state.cities[this.state.cityIdx]

    let selectedCity2 = this.state.cities[this.state.cityIdx]

    let linkJsx = null
    let postJsx = null

    if (selectedCity) {

     linkJsx = <Link className="navLink" to={`/about/${this.state.cities[this.state.cityIdx]._id}`}>
        <City city={selectedCity} /> 
      </Link>


     postJsx = <Link className="navLink" to={`/about/${this.state.cities[this.state.cityIdx]._id}`}>
     <CityPosts city={selectedCity2} /> 
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
            {postJsx}
        </main>

      </div>
    );
  }
}

export default MainPage;

  // 2 components:
  //    Sidebar
  //    CityDetails