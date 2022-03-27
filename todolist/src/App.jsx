import React, { Component } from "react"
import Header from './Header/index'
import List from './List/index'
import Footer from './Footer/index'
import {nanoid} from 'nanoid'
import './App.css';
export default class App extends Component {
  state = { 
    // Todos数据
    todos: [
      { id: nanoid(), name: "看书", done: true },
      { id: nanoid(), name: "写作", done: false },
      { id: nanoid(), name: "反思", done: true },
      { id: nanoid(), name: "做计划", done: false },
      { id: nanoid(), name: "背英语", done: false },
      { id: nanoid(), name: "敲代码", done: true },
    ]
  }
  // 对Todos插入新todo【回调】
  addTodo = (newValue)=>{
    const {todos} = this.state;
    // 插入
    todos.push({id:nanoid(),name:newValue,done:false});
    this.setState({todos});
  }
  // 更新todo勾选状态【回调】
  updateTodo = (id,done)=>{
    const {todos} = this.state
    // 匹配指定Todo
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }
  // 删除todo【回调】
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id != id
    })
    this.setState({todos:newTodos})
  }
  // 清除所有已完成Todo
  clearDoneTodo = ()=>{
    const {todos} = this.state
    // 剔除所有完成的Todo
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }
  // 全选或者全不选todos
  checkAllTodo = ()=>{
    const {todos} = this.state
    const doneCount = todos.reduce((pre,todo)=>{
        if(todo.done) return ++pre
        else return pre
    },0)
    // 是否已全选
    const isAllCheck = doneCount===todos.length;
    // 已全选则不选，未全选则全选
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:!isAllCheck}
    })
    this.setState({todos:newTodos});
  }
  render() {
    const { todos } = this.state
    return (
      <div id="AppPage">
        <div id="todolist">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} clearDoneTodo={this.clearDoneTodo} checkAllTodo={this.checkAllTodo}/>
        </div>
      </div>

    )
  }
}