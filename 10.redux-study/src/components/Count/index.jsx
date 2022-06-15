import React, { Component } from 'react'
import store from './../../redux/store'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from './../../redux/count_action'
export default class Count extends Component {
  state = {
    count:0
  }
  componentDidMount(){
    store.subscribe(()=>{
    })
  }
  // 加
  increment = () =>{
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }
  // 减
  decrement = () =>{
    const {value} = this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }
  // 是奇数就加
  incrementIfOdd = () =>{
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !==0){
      store.dispatch(createIncrementAction(value*1))
    }
  }
  // 异步加
  incrementAsync = () =>{
    const {value} = this.selectNumber
    setTimeout(()=>{
      store.dispatch(createIncrementAsyncAction(value*1,500))
    },500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">变数:1</option>
          <option value="2">变数:2</option>
          <option value="3">变数:3</option>
        </select>
        <br />
        <br />
        <button onClick={this.increment}>增加</button> &nbsp;
        <button onClick={this.decrement}>减少</button> &nbsp;
        <button onClick={this.incrementIfOdd}>当球求和为奇数再加</button> &nbsp;
        <button onClick={this.incrementAsync}>异步加</button> &nbsp;
      </div>
    )
  }
}
