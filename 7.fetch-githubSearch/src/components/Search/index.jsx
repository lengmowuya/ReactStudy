import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'
import './index.css'

export default class Search extends Component {
    keyDownHandle = async(event)=>{
        // 是否是回车事件
        if(event.keyCode !== 13) return;
        PubSub.publish('update',{isFirst:false,isLoading:true})
        // 获取用户的输入
        const {keyWordNode:{value}} = this;
        //#region 使用axios方式
        // axios.get(`/search/users?q=${value}`).then(
        //     response => {
        //         console.log(response.data)
        //         PubSub.publish('update',{users:response.data.items,isLoading:false})
        //     },
        //     error => {
        //         PubSub.publish('update',{isLoading:false,err:error.message})
        //     }
        // )
        //#endregion
        //#region 使用Promise方式 发送网络请求-使用Fetch
        // fetch(`/search/users?q=${value}`).then(
        //     response => {
        //         // console.log(response.json());
        //         return response.json();
        //     }
        // ).then(
        //     response => {console.log(response)},
        // ).catch(
        //     error => {console.log(error)}
        // )
        //#endregion
        // 使用await方式
        try{
            const response = await fetch(`/search/users?q=${value}`)
            const data = await response.json()
            PubSub.publish('update',{users:data.items,isLoading:false})
            // console.log(data);
        } catch (error) {
            PubSub.publish('update',{isLoading:false,err:error.message})
        }
        // fect：原生函数，不使用XHR对象
        // 老版本浏览器可能不支持Fectch

    }
    render() {
        return (
            <section className="jumbotron">
                <img src="./assets/git_logo.png" alt="" /><h3 className="jumbotron-heading">搜索用户</h3>
                <div>
                    <input ref={node=>this.keyWordNode = node} type="text" onKeyDown={this.keyDownHandle} placeholder="Search or jump to..." />&nbsp;
                </div>
            </section>
        )
    }
}
