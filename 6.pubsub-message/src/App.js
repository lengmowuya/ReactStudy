import React, { Component } from 'react'
import Search from './components/Search/index.jsx'
import List from './components/List/index.jsx'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}
