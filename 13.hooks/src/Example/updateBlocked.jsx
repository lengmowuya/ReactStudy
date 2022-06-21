import React,{useState,useMemo} from 'react'

export default function Example(){
    const [Linda,setLinda]= useState('Linda在线')
    const [Jack,setJack]= useState('Jack在线')
    return(
        <>
            <button onClick={()=>{
                    setLinda(new Date().getTime())
                }}>Linda</button>
            <button onClick={()=>{
                setJack(new Date().getTime()+"，现已下线")
            }}>Jack</button>
            <ChildComponent name={Linda}>{Jack}</ChildComponent>
        </>
    )
}
// 子组件会重新渲染
function ChildComponent({name,children}){
    function changeLinda(){
        console.log('==onChange')
        return name;
    }
    // useMemo解决没必要的重复执行问题
    const actionLinda = useMemo(()=>changeLinda(name),[name]) 
    return (
        <>
            <div>{actionLinda}</div>
            <div>{children}</div>
        </>
    )
}