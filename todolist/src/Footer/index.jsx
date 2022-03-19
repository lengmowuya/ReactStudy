import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
    // props:{'todolength'}
    render() {
        return (
            <div class="todo-footer">
                <span><input type="checkbox" />已完成0/2</span>
                <button class="clearDone">清除已完成任务</button>
            </div>
        )
    }
}
