import React, { Component } from 'react'

class AddWord extends Component {
  _submit = e => {
    e.preventDefault()
    this.props.addWord(this.refs.newTerm.value, this.refs.newDef.value)
    const word = this.refs.addWord
    const def = this.refs.addDef
    word.value = ''
    def.value = ''
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
