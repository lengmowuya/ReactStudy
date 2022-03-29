import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = ()=>{
    axios.get('/api1/students').then(
      response => {console.log("成功数据请求！",response.data)},
      error => {console.warn("数据请求失败！",error)}
    )
  }
  getCarData = ()=>{
    axios.get('/api2/cars').then(
      response => {console.log("成功数据请求！",response.data)},
      error => {console.warn("数据请求失败！",error)}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取学生数据</button>
        <button onClick={this.getCarData}>点击获取汽车数据</button>
      </div>
    )
  }
}
