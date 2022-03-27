import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Item extends Component {
    checkbox = React.createRef();
    static propTypes = {
        todo:PropTypes.object.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    // 勾选状态事件
    handleCheck = (id)=>{
        return ()=>{
            const done = this.checkbox.current.checked;
            this.props.updateTodo(id,done)
        }
    }
    deleteMySelf = (todo)=>{
        return ()=>{
            const {deleteTodo} = this.props
            if(window.confirm("是否删除<"+todo.name+">?")) deleteTodo(todo.id)
        }
    }
    render() {
        const { todo } = this.props
        return (
            <div className="list-item">
                <label  className="info" onChange={this.handleCheck(todo.id)}>
                    <input type="checkbox" checked={todo.done} onChange={()=>{}} ref={this.checkbox}/>{todo.name}
                </label>
                <button className="delete" onClick={this.deleteMySelf(todo)}>删除任务</button>
            </div>
        )
    }
}
