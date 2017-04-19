import React, { Component } from 'react'
const token = 'example'

class RevealWord extends Component {
  state = {
    active: []
  }

  updateWord (slug) {
    this.setState({active: []})
    const url = `https://jabberdexicon.herokuapp.com/entries/${slug}?access_token=example`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  componentDidMount () {
    this.updateWord(this.props.match.params.slug)
  }

  render () {
    return <div className='RevealWord'>
      {this.state.active.term}
    </div>
  }
}

export default RevealWord
