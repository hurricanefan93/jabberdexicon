import React, { Component } from 'react'
import AddWord from './AddWord.js'
import Definition from './Definition.js'
import Search from './Search.js'
class App extends Component {
  state = {
    active: []
  }

  componentDidMount () {
    this.loadTerms()
  }

  loadTerms () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url)
      .then(r => r.json())
      .then(data => {
        this.setState({
          active: data
        })
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
      this.loadTerms()
    })
  }

  searchWord = searchTerm => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        Term: data
      })
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
          <Definition active={this.state.active} />
        </div>
      </main>
    </div>
  }
}

export default App
