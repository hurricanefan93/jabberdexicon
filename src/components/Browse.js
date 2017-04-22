import React from 'react'
import WordList from './WordList'

const Browse = ({ entries, match }) => (
  <div className='Browse'>
    <h2>{match.params.to}</h2>
    <WordList entries={entries.filter((entry) => {
      const letter = entry.term[0].toLowerCase()
      if (match.params.to === '0') {
        return letter.match(/[^a-z]/)
      } else {
        return letter === match.params.to
      }
    })} />
  </div>
)

export default Browse
