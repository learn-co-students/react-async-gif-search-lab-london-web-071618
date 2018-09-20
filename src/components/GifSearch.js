import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            userInput: e.target.value
        }, () => console.log(this.state))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.userInput)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userInput} onChange={this.handleOnChange}></input>
                <button type="submit">Get Gifs</button>
            </form>
        )
    }
}