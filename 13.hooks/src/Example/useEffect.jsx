import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function Index(){
    useEffect(()=>{
        console.log("Index页面进入")
        // 解绑操作
        return ()=>{
            console.warn("Index页面解绑");
        }
    },[])
    return <h2>Index-Page</h2>
}
function List(){
    useEffect(()=>{
        console.log('List页面进入');
        // 解绑操作
        return ()=>{
            console.warn("Index页面解绑");
        }
    })
    return <h2>List-Page</h2>
}
function Example (){
    const [count,setCount] = useState(0) // 数组解构
    // useEffect为函数式组件中的生命周期函数
    // 异步执行，不阻塞视图更新
    useEffect(()=>{
        console.log(`count++`);
        return ()=>{
            console.log("==")
        }
    },[count])
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Count增加</button>
            <hr />
            <BrowserRouter>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Routes>
                    <Route path="/" exact element={<Index/>}></Route>
                    <Route path="/list"  element={<List/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Example;

// export default class Example extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { count: 0 }
//     }
//     addCount() {
//         this.setState({count:this.state.count+1})
//     }
//     render() {
//         return (
//             <div>
//                 <p>Count:{this.state.count}</p>
//                 <button onClick={this.addCount.bind(this)}>Count增加</button>
//             </div>
//         )
//     }
// }