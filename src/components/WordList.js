import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WordList extends Component {
  render () {
    const showWord = this.props.active.map((item) => {
      return <p key={item.id}>
        <Link to={`/entries/${item.slug}`}>{item.term}</Link>
      </p>
    })
    return (
      <div className='WordList'>
        {showWord}
      </div>
    )
  }
}

export default WordList
