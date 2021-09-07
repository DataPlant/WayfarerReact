import React from 'react'
import CityModel from '../models/CityModel'

class CityShowPage extends React.Component {
    state = {
        cityname: '',
        country: '',
        headerimg: '',
    }
    
    componentDidMount() {
        const cityId = this.props.match.params.id
        console.log(cityId);

        CityModel.show(cityId).then((data) => {
            console.log('data in city show page');
            console.log(data);

            this.setState({
                cityname: data.cityname,
                country: data.country,
                headerimg: data.headerimg,
            })
        })

    }
    
    
    render() {
        return (
            <div>      
               <h1>{ this.state.cityname }</h1>
               <h4>{ this.state.country }</h4>
               <img 
                className="city-img"
                src={this.state.headerimg}
                alt="city picture"
            />
            </div>
        )
    }
}

export default CityShowPage