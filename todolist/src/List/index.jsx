import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Item from './../Item/index'
import './index.css'
export default class List extends Component{
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render(){
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <div className="todo-itemlist">
                {
                    todos.map(todo=>{
                        return <Item key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </div>
        )
    }
}