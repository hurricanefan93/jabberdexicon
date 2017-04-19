import React, { Component } from 'react'

class Definition extends Component {
  render () {
    const showTerm = this.props.active.map((word) => {
      return <p key={word.id}> {word.term} </p>
    })
    return <div className='definition'>
      {showTerm}
    </div>
  }
}

export default Definition
