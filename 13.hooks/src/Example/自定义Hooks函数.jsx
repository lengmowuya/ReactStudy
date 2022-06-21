import React,{useState,useEffect,useCallback} from 'react';

function useWinSize(){
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    })
    // useCallback 缓存方法 ； useMemo 缓存状态
    const onResize = useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize,false)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    })
    return size;
}

export default function Example(){
    const size = useWinSize()
    return (
        <div>
            Size:{size.width}*{size.height}
        </div>
    )
}