import React from 'react'
import Header from '../components/Header' 
import axios from 'axios'

class CreatePostShowPage extends React.Component {
    state = {
        cityName: '',
        country: '',
    }
handleInputChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    })
}
handleSubmit = e => {
    e.preventDefault();
    const {cityName, country} = this.state;
    const city = {
        cityName,
        country,
    }
axios
    .post('http://localhost:4000/cities/new', city)
    .then(() => console.log('Create Check'))
    .catch(err => {
        console.error(err)
    })
}

    render() {
        return (
            <div>
                <Header />
                <h1>Create Post Show Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for='cityName'>Name of City:</label>
                    <input type='text' name='cityName' onChange={this.handleInputChange}></input>
                    <label for='country'>Name of Country:</label>
                    <input type='text' name='country' onChange={this.handleInputChange}></input>
                    <button type='submit'>Create</button>
                </form>
            </div>
        )
    }
}

export default CreatePostShowPage