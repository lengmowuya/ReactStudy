import React,{useRef,useState,useEffect} from 'react';

export default function Example(){
    const inputEl = useRef(null)
    const onButtonClick = ()=>{
        inputEl.current.value = "Hello,World!5y"
        console.log(inputEl);
    }
    const [text,setText] = useState('hello')
    const textRef = useRef()
    useEffect(()=>{
        textRef.current = text
        console.log('textRef.current:',textRef.current)
    })
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>展示文字</button>
            <br />
            <input value={text} onChange={(e)=>{
                setText(e.target.value)
            }} type="text" />
        </>
    )
}