import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    search: ''
  }

  componentDidMount () {
    return fetch ('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
            .then(resp => resp.json())
            .then(resp => this.setState({gifs: resp.data.slice(0, 3)}))
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  submitHandler = (event) => {
    event.preventDefault()

    return fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(resp => this.setState({gifs: resp.data.slice(0, 3)}))
  }

  render () {
    return (
      <div>
        < GifSearch handleChange={this.handleChange} submitHandler={this.submitHandler} />
        < GifList gifs={this.state.gifs} />
      </div>

    )
  }
}

export default GifListContainer
