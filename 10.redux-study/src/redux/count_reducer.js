const initState = 0
export default function countReducer(preState=initState,action){
    // if(preState === undefined) preState = 0;
    const {type,data} = action
    switch (type){
        case 'increment': // 加
            return preState + data
        case 'decrement': // 减
            return preState - data
        default:
            return preState
    }
}
