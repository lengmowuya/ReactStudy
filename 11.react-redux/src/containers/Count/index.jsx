// 引入Count的UI组件
import CountUI from './../../components/Count'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// a函数的返回值作为状态传递给UI组件
function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        increment:number=>dispatch(createIncrementAction(number*1)),
        decrement:number=>dispatch(createDecrementAction(number*1)),
        incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number*1,time))
    }
}
// 创建并暴露容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)
export default CountContainer;