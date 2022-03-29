import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = ()=>{
    axios.get('/getStudent').then(
      response => {console.log("成功数据请求！",response.data)},
      error => {console.warn("数据请求失败！",error)}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取学生数据</button>
      </div>
    )
  }
}
