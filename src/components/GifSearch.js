import React from 'react'

const GifSearch = props =>
  <div>
    <form onSubmit={event => props.submitHandler(event)} name='search'>
      <input onChange={event => props.handleChange(event)} type='text' name='search' />
    </form>
  </div>

export default GifSearch
