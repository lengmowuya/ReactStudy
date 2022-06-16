// 引入Count的UI组件
import CountUI from './../../components/Count'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 映射状态
// const mapStateToProps = state=> ({count:state})
// 映射操作状态的方法
// const mapDispatchToProps = dispatch => {
//     return {
//         increment:number=>dispatch(createIncrementAction(number*1)),
//         decrement:number=>dispatch(createDecrementAction(number*1)),
//         incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number*1,time))
//     }
// }
// 创建并暴露容器组件
// const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)
// export default CountContainer;
export default connect(
    state=> ({count:state}),
    // mapDispatchToProps的一般写法
    // dispatch => ({
    //     increment:number=>dispatch(createIncrementAction(number*1)),
    //     decrement:number=>dispatch(createDecrementAction(number*1)),
    //     incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number*1,time))
    // })

    // mapDispatchToProps的精简写法
    // react-redux会自动分发简写的action
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
)(CountUI)