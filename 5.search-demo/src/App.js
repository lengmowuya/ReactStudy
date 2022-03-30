import React, { Component } from 'react'
import Search from './components/Search/index.jsx'
import List from './components/List/index.jsx'

export default class App extends Component {
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }
  render() {
    const {users} = this.state;
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
