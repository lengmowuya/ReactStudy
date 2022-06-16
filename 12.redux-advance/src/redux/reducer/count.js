import {INCREMENT,DECREMENT} from './../constant'
const initState = 0
export default function countReducer(preState=initState,action){
    // if(preState === undefined) preState = 0;
    const {type,data} = action
    switch (type){
        case INCREMENT: // 加
            return preState + data
        case DECREMENT: // 减
            return preState - data
        default:
            return preState
    }
}
