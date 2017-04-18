import React, { Component } from 'react'

class Search extends Component {
  _submit = e => {
    e.preventDefault()
    this.props.searchWord(this.refs.searchText.value)
  }

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return <form onSubmit={this._submit} className='Search'>
      <input onFocus={this._focus} type='text' ref='searchText' placeholder='Search something!' />
      <input type='submit' value='Search' />
    </form>
  }
}

export default Search
