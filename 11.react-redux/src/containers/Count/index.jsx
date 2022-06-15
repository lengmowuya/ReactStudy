// 引入Count的UI组件
import CountUI from './../../components/Count'
import {createIncrementAction} from '../../redux/count_action'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// a函数的返回值作为状态传递给UI组件
function a(state){
    return {count:state}
}

function b(dispatch){
    return {add:(number)=>{
        dispatch(createIncrementAction(number))
    }}
}
// 创建并暴露容器组件
const CountContainer = connect(a,b)(CountUI)
export default CountContainer;