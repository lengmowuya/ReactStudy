import React, { Component } from "react"
import './App.css';
import Header from './Header/index'
import List from './List/index'
import Footer from './Footer/index'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: "看书", done: true }
    ]
  }
  render() {
    const { todos } = this.state
    return (
      <div id="AppPage">
        <div id="todolist">
          <Header />
          <List todos={todos} />
          <Footer todolength={todos.length} />
        </div>
      </div>

    )
  }
}