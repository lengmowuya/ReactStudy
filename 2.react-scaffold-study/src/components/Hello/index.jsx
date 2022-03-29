import React,{Component} from 'react'
import style from './index.module.css'

export default class Hello extends Component{
    render(){
        return <h2 className={style.title}>Hello,React!</h2>
    }
}