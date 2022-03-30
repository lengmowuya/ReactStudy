import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Search extends Component {
    search = ()=>{
        // 获取用户的输入
        const {keyWordNode:{value}} = this;
        // 发送网络请求
        axios.get(`/search/users?q=${value}`).then(
            response => {console.log('成功了',response.data);},
            error => {console.log(error)}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索用户</h3>
                <div>
                    <input ref={node=>this.keyWordNode = node} type="text" placeholder="输出关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
