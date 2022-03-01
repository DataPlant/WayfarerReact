import React from 'react'
import axios from 'axios'
import CityModel from '../models/CityModel'
import SelectDropdown from '../components/SelectDropdown'
import styled from 'styled-components'

const Div = styled.div`
  background-size:cover;
  background-color:#121212;
`

class CreatePostShowPage extends React.Component {
    state = {
        title: '',
        content: '',
        img: '',
        cities: [],
        cityId: '',
    }
    componentDidMount() {

        CityModel.all().then((data) => {
            this.setState({ cities: data });
        });
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { title, content, img, cityId } = this.state;
        const city = {
            title,
            content,
            img,
            cityId,
        }
        axios
            .post('https://dk-wayfarer.herokuapp.com/post', city)
            .then(() => window.location.href = "/cities")
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <body>
                <div className="post-form-wrapper">
                    <form className="post-form" onSubmit={this.handleSubmit}>
                        <h1 className="title" >Add A Post!</h1>
                        <p>say something nice or nothing at all!</p>
                        <br></br>

                        <div className="input-field">
                            <input className="input" placeholder="Post Title" type='text' name='title' onChange={this.handleInputChange}></input>
                        </div>
                        <br></br>

                        <div className="input-field">
                            <input className="input" placeholder="Post Content" type='text' name='content' onChange={this.handleInputChange}></input>
                        </div>
                        <br></br>

                        <div className="input-field">
                            <input className="input" placeholder="Image" type='text' name='img' onChange={this.handleInputChange}></input>
                        </div>
                        <br></br>
                        <div className="input-field">
                            <select className="input" name='cityId' value={this.state.cityId} onChange={this.handleInputChange}>
                                <option value='' selected>Select City</option>
                                <SelectDropdown cities={this.state.cities} />
                            </select>
                            <br></br>

                        </div>
                        <button className="button-sign" type='submit'>Create</button>
                    </form>
                </div>
            </body>
        )
    }
}

export default CreatePostShowPage