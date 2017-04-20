import React, { Component } from 'react'
import AddWord from './AddWord.js'
import Result from './Result.js'
import Search from './Search.js'
import Home from './Home.js'
import RevealWord from './RevealWord.js'
import WordList from './WordList.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
const token = 'example'

class App extends Component {
  state = {
    active: [],
    search: [],
    clicked: false
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
      console.log(data)
    })
  }

  searchWord = (searchTerm) => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      const searchFilter = data.filter(item => item.term.includes(searchTerm))
      console.log(searchFilter)
    })
  }

  _click = () => {
    this.setState({ clicked: true })
    console.log('click')
  }

  render () {
    return <Router>
      <div className='App'>
        <header>
          <NavLink className={Home} to={'/'}>
          Jabberdexicon
        </NavLink>
        </header>
        <main>
          <div className='userinput'>
            <Route exact path='/' component={Home} />
            <Route path='/entries/:slug' component={Result} />
            <Search searchWord={this.searchWord} />
            <AddWord addWord={this.addWord} />
            <WordList active={this.state.active} />
            <RevealWord />
          </div>
        </main>
      </div>
    </Router>
  }
}

export default App
