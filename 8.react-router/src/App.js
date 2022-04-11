import React, { Component } from 'react'
import {NavLink,Route,Direct} from 'react-router-dom'
import About from './pages/About/index'
import Home from './pages/Home/index'
import Header from './components/Header/index'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="Nav">
            <NavLink activeClassName='action' className="route-link" to="/home">Home</NavLink>
            <NavLink activeClassName='action' className="route-link" to="/about">About</NavLink>
          </div>
          <div className="Page">
            {/* 注册路由 */}
            {/* 一般组件放components目录，路由组件放pages目录 */}
            {/* 一般组件props父级传入啥有啥，路由组件props接收到三个路由对象 */}
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </div>
    )
  }
}
