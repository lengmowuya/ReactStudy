import { ADD_PERSON } from "../constant"
const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState=initState,action){
    const {type,data} = action
    console.log('===');
    switch(type){
        case ADD_PERSON:
            console.log('---');
            return [data,...preState];
        default:
            return preState
    }
}