import React, { Component } from 'react'

class Search extends Component {
  state = {
    active: []
  }

  getResults (query) {
    const url = `https://jabberdexicon.herokuapp.com/entries?q=${query}?access_token=example`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      }, console.log(data))
    })
  }
  _submit = e => {
    e.preventDefault()
    this.getResults(e.target.value)
  }

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return <form onChange={this._submit} className='Search'>
      <input onFocus={this._focus} type='text' ref='searchText' placeholder='Search something!' />
      <input type='submit' value='Search' />
    </form>
  }
}

export default Search
