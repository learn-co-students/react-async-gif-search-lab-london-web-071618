import React from 'react'

class GifSearch extends React.Component {

    constructor() {
        super()
        this.state = {currentInput: ''}
    }

    handleInput = (event) => {
        this.setState(
            { currentInput: event.target.value }
        )
    }


    render() {
        return(
            <p><input onChange={this.handleInput}></input> <button onClick={() => this.props.filterGifs(this.state.currentInput)}>Search</button></p>
        )
    }
}


export default GifSearch