import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Header extends Component {
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp = (event)=>{
        const {keyCode,target} = event;
        const {addTodo} = this.props;
        // 判断是否是回车
        if(keyCode != 13) return;
        // 新增的todo不能为空
        if(target.value == '') return;
        addTodo(target.value);
        target.value = '';
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入新任务" />
            </div>
        )
    }
}
