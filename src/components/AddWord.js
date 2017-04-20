import React, { Component } from 'react'

class AddWord extends Component {
  _submit = e => {
    e.preventDefault()
    this.props.addWord(this.refs.addWord.value, this.refs.addDef.value)
    this.refs.addWord.value = ''
    this.refs.addDef.value = ''
  }

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return (
      <form onSubmit={this._submit}>
        <input onFocus={this._focus} type='text' ref='addWord' placeholder='New Term' />
        <textarea onFocus={this._focus} type='text' ref='addDef' placeholder='New Definition' />
        <input type='submit' value='Add' />
      </form>
    )
  }
}

export default AddWord
