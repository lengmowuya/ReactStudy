import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
    // 询问是否删除全部已完成
    ReadyClearDone = (doneCount)=>{
        return ()=>{
            // 对无未完成不响应
            // 0默认转true
            if(doneCount==0) return;
            const {clearDoneTodo} = this.props
            if(window.confirm("确认清除所有已完成任务？")) clearDoneTodo()
        }
    }
    render() {
        const {todos,checkAllTodo} = this.props
        const doneCount = todos.reduce((pre,todo)=>{
            if(todo.done) return ++pre
            else return pre
        },0)
        return (
            <div className="todo-footer">
                <span><input type="checkbox" onChange={checkAllTodo} checked={doneCount===todos.length&&doneCount>0} />已完成({doneCount}/{todos.length})</span>
                <button className={['clearDone',doneCount>0?'active':null].join(' ')} onClick={this.ReadyClearDone(doneCount)}>清除已完成任务</button>
            </div>
        )
    }
}
