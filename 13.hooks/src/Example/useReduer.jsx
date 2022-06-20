import React,{useReducer} from 'react'
export default function ReducerDemo(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1
            case 'sub':
                return state-1 
            default:
                return state
        }
    },0)

    return (
        <div>
            <h2>Score(成绩):{count}</h2>
            <button onClick={()=>{
                dispatch('add')
            }}>Increment</button>
            <button onClick={()=>{
                dispatch('sub')
            }}>Decrement</button>
        </div>
    )
}

// Reducer
// 传递一个值，判断值来执行控制叫Reducer
// function countReducer(state,action){
//     switch(action.type){
//         case 'add':
//             return state+1
//         case 'sub':
//             return state-1 
//         default:
//             return state
//     }
// }