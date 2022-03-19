import React,{Component} from 'react'
import './index.css'
import Item from './../Item/index'
export default class List extends Component{
    render(){
        return (
            <div class="todo-itemlist">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        )
    }
}