import React from 'react'
import axios from 'axios'
import CityModel from '../models/CityModel'

class UpdatePost extends React.Component {
    state = {
        title: '',
        content: '',
        img: '',
        cityId: '',
        cities: [],
    }
    componentDidMount() {
        CityModel.all().then((data) => {
            this.setState({ cities: data });
        });
    }

    handleSelectChange = e => {
        this.setState({
            cityId: e.target.value,
        })
        this.state.cities.find((city) => {

        })
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { title, content, img, cityId} = this.state;
        const city = {
            title,
            content,
            img,
            cityId,
        }
        axios
            .post('http://localhost:4000/post', city)
            .then(() => console.log('Create Check'))
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <div>
                <h1>Update Post Show Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <select name='cityId' value={this.state.cityId} onChange={this.handleSelectChange}>
                        <option value='' selected>Select</option>
                        <SelectDropdown cities={this.state.cities}/>
                    </select>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' name='title' onChange={this.handleInputChange}></input>
                    <label htmlFor='content'>Content:</label>
                    <input type='text' name='content' onChange={this.handleInputChange}></input>
                    <label htmlFor='img'>Image URL:</label>
                    <input type='text' name='img' onChange={this.handleInputChange}></input>
                    <button type='submit'>Create</button>
                </form>
            </div>
        )
    }
}

export default UpdatePost