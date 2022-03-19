import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  render() {
    return (
        <div class="todo-header">
        <input type="text" placeholder="请输入新任务"/>
      </div>
    )
  }
}
