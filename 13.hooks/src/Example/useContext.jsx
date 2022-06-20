// 父子数据传递
import React, {useState,createContext,useContext} from 'react'
const CountContext = createContext();

function Counter(){
    let count = useContext(CountContext)
    return (<h2>{count}</h2>)
}

export default function Example (){
    const [count,setCount] = useState(0) // 数组解构
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Count增加</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}