import React,{Component} from 'react'
import './index.css'
import Item from './../Item/index'
export default class List extends Component{
    render(){
        const {todos} = this.props
        return (
            <div class="todo-itemlist">
                {
                    todos.map(todo=>{
                        return <Item key={todo.id} todo={todo}/>
                    })
                }
            </div>
        )
    }
}