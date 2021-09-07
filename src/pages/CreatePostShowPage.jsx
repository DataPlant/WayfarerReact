import React from 'react'
import Header from '../components/Header'
import axios from 'axios'

class CreatePostShowPage extends React.Component {
    state = {
        title: '',
        content: '',
        img: '',
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { title, content, img} = this.state;
        const city = {
            title,
            content,
            img,
        }
        axios
            .post('http://localhost:4000/post/new', city)
            .then(() => console.log('Create Check'))
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <div>
                <h1>Create Post Show Page</h1>
                <form onSubmit={this.handleSubmit}>
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

export default CreatePostShowPage