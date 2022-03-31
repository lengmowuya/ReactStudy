import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    componentDidMount(){
        this.token = PubSub.subscribe('update',(message,data)=>{
            // console.log(data);
            this.setState(data);
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users,isFirst,isLoading,err} = this.state;
        return (
            <div className="row">
                {
                    isFirst ? <h2>Welcome to the git user search engine!</h2> :
                    isLoading ? <h2>急速搜索中...</h2> :
                    err ? <h2  style={{color:'red'}}>{err}</h2> :
                    users.map(userObj=>{
                        return (
                            <div className="card" key={userObj.id}>
                                <a href={userObj.html_url}  target="_blank" rel="noreferrer">
                                    <img alt="用户头像" src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
