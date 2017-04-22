import React from 'react'
import _ from 'lodash'
import WordList from './WordList'

const Home = ({ entries }) => (
  <div className='Home'>

    <h3>Random Entries</h3>

    <div className='random'>
      <WordList entries={_.sampleSize(entries, 4)} />
    </div>
  </div>
)

export default Home
