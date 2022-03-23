import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    render() {
        const { todo } = this.props
        return (
            <div class="list-item">
                <label class="info">
                    <input type="checkbox" defaultChecked={todo.done} />{todo.name}
                </label>
                <button class="delete">删除任务</button>
            </div>
        )
    }
}
