import React, { Component } from 'react'
export default class Count extends Component {
  state = {
    count:0
  }
  // 加
  increment = () =>{
    const {value} = this.selectNumber
    this.props.increment(value);
  }
  // 减
  decrement = () =>{
    const {value} = this.selectNumber
    this.props.decrement(value);
  }
  // 是奇数就加
  incrementIfOdd = () =>{
    const {value} = this.selectNumber
    if(this.props.count%2 !== 0){
      this.props.increment(value);
    }
  }
  // 异步加
  incrementAsync = () =>{
    const {value} = this.selectNumber
    this.props.incrementAsync(value,500);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
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
