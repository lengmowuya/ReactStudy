import React, { Component } from "react"
import Header from './Header/index'
import List from './List/index'
import Footer from './Footer/index'
import {nanoid} from 'nanoid'
import './App.css';
console.log(nanoid());
console.log(nanoid());
console.log(nanoid());
export default class App extends Component {
  state = { 
    todos: [
      { id: 1, name: "看书", done: true },
      { id: 2, name: "写作", done: false },
      { id: 3, name: "反思", done: true },
      { id: 4, name: "做计划", done: false },
      { id: 5, name: "背英语", done: false },
      { id: 6, name: "敲代码", done: true },
    ]
  }
  addTodo = (newValue)=>{
    const {todos} = this.state;
    todos.push({id:todos.length+1,name:newValue,done:false});
    this.setState({todos});
  }
  render() {
    const { todos } = this.state
    return (
      <div id="AppPage">
        <div id="todolist">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer todolength={todos.length} />
        </div>
      </div>

    )
  }
}