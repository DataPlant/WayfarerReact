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
        const { cityname, country, headerimg} = this.state;
        const city = {
            cityname,
            country,
            headerimg,
        }
        axios
            .post('http://localhost:4000/cities', city)
            .then(() => console.log('Create Check'))
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <div>
                {/* <h1>Create Post Show Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='cityname'>Name of the City:</label>
                    <input type='text' name='cityname' onChange={this.handleInputChange}></input>
                    <label htmlFor='country'>Country:</label>
                    <input type='text' name='country' onChange={this.handleInputChange}></input>
                    <label htmlFor='headerimg'>Image URL:</label>
                    <input type='text' name='headerimg' onChange={this.handleInputChange}></input>
                    <button type='submit'>Create</button>
                </form> */}

                <body>
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
                            <input className="input" placeholder="Country Name" type='text' name='country'  onChange={this.handleInputChange}></input>
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