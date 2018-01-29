/** 创建store */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combineReducers from './reducers.js'

const store = createStore(combineReducers, applyMiddleware(thunkMiddleware))

export default store

/**
 * redux的数据流
 * 调用store.dispatch(action)提交action。
 * redux store调用传入的reducer函数。把当前的state和action传进去。
 * 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。\
 * Redux store 保存了根 reducer 返回的完整 state 树。
 */

/**
 * 引用redux-thunk,让action返回函数 */
