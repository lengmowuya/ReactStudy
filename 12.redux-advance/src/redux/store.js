import { createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducer/count'
import personReducer from './reducer/person'
import thunk from 'redux-thunk'
//汇总所有的Reducer，变成一个总的reducer
const allReducer = combineReducers({
    count:countReducer,
    persons:personReducer
})
export default createStore(allReducer,applyMiddleware(thunk))