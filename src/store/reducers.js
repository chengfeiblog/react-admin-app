import { combineReducers } from 'redux'
import * as counter from './counter/reducer'
import * as userInfo from './userInfo/reducer'

// 自己定义的 combineReducers函数
// export default function combineReducers(state = {}, action) {
//   return {
//     counter: counter(state.counter, action),
//     userInfo: userInfo(state.userInfo, action)
//   };
// }

/** 使用官方提供的 */
export default combineReducers({
    ...counter,
    ...userInfo,
})
