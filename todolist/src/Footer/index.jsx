import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
    // props:{'todolength'}
    render() {
        const {todolength} = this.props
        return (
            <div class="todo-footer">
                <span><input type="checkbox" />已完成 0 / {todolength}</span>
                <button class="clearDone">清除已完成任务</button>
            </div>
        )
    }
}
