import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SearchForm extends Component {
  _submit = (event) => {
    event.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.refs.query.value = ''
    this.props.history.push(path)
  }

  render () {
    return <form action='#' onSubmit={this._submit}>
      <div className='searchbar'>
        <input type='search' ref='query' className='search' placeholder='Search..' />
      </div>
    </form>
  }
}

export default withRouter(SearchForm)
