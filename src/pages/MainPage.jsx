import React from 'react'
import CityModel from '../models/CityModel';
import PostModel from '../models/PostModel'
import Sidebar from '../components/mainPageComponents/Sidebar';
import City from '../components/City';
import { Link } from 'react-router-dom';
import CityPosts from '../components/CityPosts';
import styled from 'styled-components';

const H1 = styled.h1`
  color:white;
  font-size:20px;
  padding-left:40px;
  padding-bottom:20;
`
class MainPage extends React.Component {

  state = {
    cities: [],
    cityIdx: 0,
    posts: [],
  }

  updateCityIdx = (idx) => {
    this.setState({ cityIdx: idx });
  }

  componentDidMount() {
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
    let selectedPost = this.state.cities[this.state.cityIdx]
    let linkJsx = null
    let postJsx = null

    if (selectedCity) {
      linkJsx = <Link className="navLink" to={`/about/${this.state.cities[this.state.cityIdx]._id}`}>
        <City city={selectedCity} />
      </Link>
      postJsx = <Link className="navLink" to={`/about/${this.state.cities[this.state.cityIdx]._id}`}>
        <CityPosts city={selectedPost} />
      </Link>
    } else {
      linkJsx = ''
    }

    return (
      <div className="main-page">
        <Sidebar
          cityNames={cityNames}
          updateCityIdx={this.updateCityIdx}
        />
        <main className="city-info">
          <div className="add-city-wrapper">
            <Link className="navLink1" to="/cities/new">
              <p className="add-city-text">Add City</p>
              <button className="add-city">+</button></Link>
          </div>

        {linkJsx}

          <div className="add-post-wrapper">
            <Link className="navLink1" to="/posts/new">
              <p className="add-post-text">Add Post</p>
              <button className="add-post">+</button></Link>
          </div>
          <H1>Read some posts...</H1>

        {postJsx}

        </main>
      </div>
    );
  }
}

export default MainPage;
