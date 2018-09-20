import React, { Component } from 'react'

export default class GifList extends Component {


    render() {
        return (
            <ul>
                <img src={this.props.threeGifs[0]} />
                <img src={this.props.threeGifs[1]} />
                <img src={this.props.threeGifs[2]} />


                {/* {this.props.threeGifs.map(gif => <li> {gif} </li>)} */}
            </ul>
        )
    }
}