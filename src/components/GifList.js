import React from 'react'

const GifList = props =>
  <div>
    {props.gifs.map(gif =>
      <div>
        <img src={gif.images.original.url} />
      </div>
    )}
  </div>

export default GifList
