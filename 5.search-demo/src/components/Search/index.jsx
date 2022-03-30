import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Search extends Component {
    keyDownHandle = (event)=>{
        // 是否是回车事件
        if(event.keyCode != 13) return;
        this.props.updateAppState({isFirst:false,isLoading:true});

        // 获取用户的输入
        const {keyWordNode:{value}} = this;
        // 发送网络请求
        axios.get(`/search/users?q=${value}`).then(
            response => {
                console.log(response.data)
                this.props.updateAppState({users:response.data.items,isLoading:false});
            },
            error => {
                this.props.updateAppState({isLoading:false,err:error.message});
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <img src="./assets/git_logo.png" alt="" /><h3 className="jumbotron-heading">搜索用户</h3>
                <div>
                    <input ref={node=>this.keyWordNode = node} type="text" onKeyDown={this.keyDownHandle} placeholder="Search or jump to..." />&nbsp;
                    {/* <button onClick={this.search}>搜索</button> */}
                </div>
            </section>
        )
    }
}
