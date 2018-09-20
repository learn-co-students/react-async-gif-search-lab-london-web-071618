import React, { Component } from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

export default class GifListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            threeGifs: ""
        }
    }
    fetchGifs = (input) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            const newGifs = json.data.slice(0,3)
            const gifUrls = newGifs.map(gif => gif.images.original.url)
            this.setState({
                threeGifs: gifUrls
            })
        })
    }

    

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList threeGifs={this.state.threeGifs}/>
            </div>
        )
    }
}