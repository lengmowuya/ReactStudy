import React, { Component } from 'react'
// 改为引入其容器组件
import Count from './containers/Count'
import Person from './containers/Person'
import store from './redux/store'
// import Count from "./components/Count/index"
export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}></Count>
        <hr />
        <Person store={store}></Person>
      </div>
    )
  }
}
