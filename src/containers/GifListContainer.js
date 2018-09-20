import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {  allGifs: [],
                        filteredGifs: []
                     }
    }

    componentDidMount() {
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
            .then(resp=> resp.json())
            .then(json=> {
                            this.setState({allGifs: json.data})

                         })
    }

    filterGifs = (searchText) => {
        let gifs = JSON.parse(JSON.stringify(this.state.allGifs))
        console.log(gifs)
        let filtered = gifs.filter(gif =>
            gif.title.includes(searchText))
        this.setState({filteredGifs: filtered})
    }

    render() {
        return (
            <div>
            <div><GifSearch filterGifs={this.filterGifs}/></div>
            <div><GifList gifs={this.state.filteredGifs} /></div>
            </div>
        )
    }

}

export default GifListContainer