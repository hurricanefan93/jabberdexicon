import React, { Component } from 'react'
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import { get } from '../api'
import Home from './Home'
import SearchForm from './SearchForm'
import Search from './Search'
import Browse from './Browse'
import Entry from './Entry'
import AddWord from './AddWord'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {
  state = {
    entries: []
  }

  componentDidMount () {
    get('/entries').then((entries) => {
      this.setState({ entries })
    })
  }

  render () {
    return <Router>
      <div className='App'>
        <header>
          <h1><Link to='/'>The Jabberdexicon</Link></h1>
          <SearchForm />
        </header>
        <nav>
          <ul>
            {ALPHABET.map((i) => (
              <li key={i}>
                <NavLink to={`/browse/${i}`}>{i}</NavLink>
              </li>
            ))}
            <li><NavLink to='/browse/0'>#</NavLink></li>
          </ul>
        </nav>
        <main>
          <div className='homescreen'>
            <Route exact path='/' render={(props) => (
              <Home entries={this.state.entries} {...props} />
          )} /> </div>
          <Route exact path='/browse/:to' render={(props) => (
            <Browse entries={this.state.entries} {...props} />
          )} />
          <Route path='/entry/:slug' component={Entry} />
          <Route path='/search/:query' component={Search} />
          <Route path='/new' component={AddWord} />
        </main>
        <footer>
          <button><Link to='/new'>Add an Entry</Link></button>

          <p>Made with &hearts; at The Iron Yard by Garret Morales</p>
        </footer>
      </div>
    </Router>
  }
}

export default App
