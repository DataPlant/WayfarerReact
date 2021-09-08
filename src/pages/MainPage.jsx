import React from 'react'
import CityListPage from './CityListPage';
import CityShowPage from './CityShowPage';
import CityModel from '../models/CityModel';
import PostModel from '../models/PostModel'
import Sidebar from '../components/mainPageComponents/Sidebar';
import City from '../components/City';


class MainPage extends React.Component {

    state = {
        cities: [],
        cityIdx: 0,
        posts: [],
        postIdx: 0,
    }

    updateCityIdx = (idx) => {
        // Anytime we update state we must call this.setState()
        // this.setState() will tell the component to rerender.
        this.setState({ cityIdx: idx });
      }

    componentDidMount() {
        console.log('did mount');
        
        CityModel.all().then((citydata) => {
          this.setState({ cities: citydata });
        });
        PostModel.all().then((postdata) => {
          this.setState({posts: postdata})
        })
    }

  
    render() {

        let cityNames = this.state.cities.map(city => {
            return city.cityname
          })


        let selectedCity = this.state.cities[this.state.cityIdx] 
    
      return (
        <div className="main-page">

            {/* <CityListPage cities={ this.state.cities } /> */}

            <Sidebar 
            cityNames = { cityNames }
            updateCityIdx={ this.updateCityIdx }
            />

          <main className="category-info">
          <section className="category-detail">
            Learn More About...
          </section>
            
            { selectedCity ? <City city={ selectedCity } posts={}/> : "" }
          </main>

        </div>
      );
    }
  }
  
  export default MainPage;

  // 2 components:
  //    Sidebar
  //    CityDetails