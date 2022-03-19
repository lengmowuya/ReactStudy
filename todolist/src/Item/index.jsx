import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  render() {
    return (
      <div class="list-item">
          <span class="info">
            <input type="checkbox" />
            <span>读书</span>
          </span>
          <button class="delete">删除任务</button>
      </div>
    )
  }
}
