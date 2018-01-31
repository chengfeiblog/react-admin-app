import React, { Component } from 'react'
import { increment, decrement, reset } from 'store/counter/action'
import { connect } from 'react-redux'
import { Button } from 'antd'

class Counter extends Component {
  render () {
    return (
      <div>
        <Button type="primary">Button</Button>
        <div>当前计数为({this.props.counter.count})</div>
        <button
          onClick={() => {
            this.props.increment()
          }}
        >
          自增
        </button>
        <button
          onClick={() => {
            this.props.decrement()
          }}
        >
          自减
        </button>
        <button
          onClick={() => {
            this.props.reset()
          }}
        >
          重置三生
        </button>
      </div>
    )
  }
}

/** 将需要的state的节点注入到与此视图数据相关的组件上 */
const mapStateToProps = (state) => {
  return {
    counter: state.countData,
  }
}

/** 将需要绑定的响应事件注入到组件上 */
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    },
  }
}

/**
 * connect接收两个参数，一个mapStateToProps,就是把redux的state，
 * 转为组件的Props，还有一个参数是mapDispatchToprops,
 * 就是把发射actions的方法，转为Props属性函数。
 * */
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
