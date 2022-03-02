import React from 'react'
import axios from 'axios'

class CreateCityShowPage extends React.Component {
    state = {
        cityname: '',
        country: '',
        headerimg: '',
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { cityname, country, headerimg } = this.state;
        const city = {
            cityname,
            country,
            headerimg,
        }
        axios
            .post('https://wayfarerbackend.herokuapp.com/cities', city)
            .then(() => window.location.href = "/cities")
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <div>

                <body className="body-form">
                    <div className="city-form-wrapper">
                        <form className="post-form" onSubmit={this.handleSubmit}>
                            <h1 className="title" >Add A City!</h1>
                            <p>say something nice or nothing at all!</p>
                            <br></br>

                            <div className="input-field">
                                <input className="input" placeholder="City Name" type='text' name='cityname' onChange={this.handleInputChange}></input>
                            </div>
                            <br></br>

                            <div className="input-field">
                                <input className="input" placeholder="Country Name" type='text' name='country' onChange={this.handleInputChange}></input>
                            </div>
                            <br></br>


                            <div className="input-field">
                                <input className="input" placeholder="Content" type='text' name='content' onChange={this.handleInputChange}></input>
                            </div>
                            <br></br>

                            <div className="input-field">
                                <input className="input" placeholder="Image" type='text' name='headerimg' onChange={this.handleInputChange}></input>
                            </div>
                            <br></br>
                                <button className="button-sign" type='submit'>Create</button>
                        </form>
                    </div>
                </body>

            </div>

        )
    }
}

export default CreateCityShowPage