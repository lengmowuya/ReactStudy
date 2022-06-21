import React,{createContext,useContext,useReducer} from 'react';

export default function Example(){
    return (
        <div>
            <Color>
                <ShowArea/>
                <ButtonList/>
            </Color>
        </div>
    )
}
const ColorContext = createContext({})
const Color = (props)=>{
    const [color,dispatch] = useReducer(reducer,'blue')
    return (
        // 区域内状态共享
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
function ShowArea(){
    const {color} = useContext(ColorContext)
    return (
        <div>
            <h2 style={{color}}>字体颜色为{color}</h2>
        </div>
    )
}
function ButtonList(){
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            {/* <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:"red"})}}>Red</button> */}
            <ColorButton color="yellow"/>
            <ColorButton color="gold"/>
            <ColorButton color="purple"/>
            <ColorButton color="black"/>
            <ColorButton color="gray"/>
            <ColorButton color="green"/>
            <ColorButton color="pink"/>
            <ColorButton color="orange"/>
            <ColorButton color="blue"/>
            <ColorButton color="red"/>
            <ColorButton color="tomato"/>
            <ColorButton color="silver"/>
            <ColorButton color="white"/>
            <ColorButton color="brown"/>
        </div>
    )
}
function ColorButton(props){
    const {dispatch} = useContext(ColorContext)
    const color = props.color;
    return (
        <button style={{color}} onClick={()=>{dispatch({type:UPDATE_COLOR,color})}}>{getColorName(color)}</button>
    )
}
function getColorName(str){
    let newStr = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
    return newStr;
}
const UPDATE_COLOR = "UPDATE_COLOR"
const reducer = (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

