import React, { Component } from 'react'
import AddWord from './AddWord.js'
import Definition from './Definition.js'
import Search from './Search.js'
class App extends Component {
  state = {
    active: {}
  }

// const token = 'banapple';

  componentDidMount () {
    // the URL to "get" todo items
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    // make an AJAX request to that URL
    window.fetch(url)
      // fetch returns a promsise, which yeilds the "response", we call it 'r'
      // The response has a method json(), that returns another promise
      .then(r => r.json())
      // then JSON is done parsing, the promise will yeild the "data"
      .then(data => {
        // use the data as the state for our items
        this.setState({
          active: data
        })
        console.log(data)
      })
  }

  addWord = (newTerm, newDef) => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'entry': {
          'term': newTerm,
          'definition': newDef
        }
      })
    }).then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  searchWord = searchTerm => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }

  render () {
    return <div className='App'>
      <header>
        <h1>Jabberdexicon</h1>
      </header>
      <main>
        <div className='userinput'>
          <AddWord addWord={this.addWord} />
          <Search searchWord={this.searchWord} />
          <Definition term={this.state.active.term} definition={this.state.active.definition} />
        </div>
      </main>
    </div>
  }
}

export default App
