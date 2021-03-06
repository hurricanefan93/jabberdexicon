import React, { Component } from 'react'
import { post } from '../api'

class AddWord extends Component {
  _submit = (event) => {
    event.preventDefault()
    post('/entries', {
      entry: {
        term: this.refs.term.value,
        definition: this.refs.definition.value
      }
    }).then((entry) => {
      this.props.history.push(`/entry/${entry.slug}`)
    })
  }

  render () {
    return <div className='AddWord'>
      <h2>Add and Entry</h2>
      <form action='#' onSubmit={this._submit}>
        <p>
          <label>Term</label>
          <input type='text' ref='term' />
        </p>
        <p>
          <label>Definition</label>
          <textarea cols='30' rows='10' ref='definition' />
        </p>
        <p>
          <button type='submit'>ADD</button>
        </p>
      </form>
    </div>
  }
}

export default AddWord
