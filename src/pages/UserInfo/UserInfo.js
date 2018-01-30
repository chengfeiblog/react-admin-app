import React, { Component } from 'react'
import { is, fromJS } from 'immutable'
import { connect } from 'react-redux'
import { getUserInfo } from 'store/userInfo/action'

class UserInfo extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    )
  }
  render () {
    const { userInfo, isLoading, errorMsg } = this.props.userInfoData
    return (
      <div>
        {isLoading
          ? '请求信息中......'
          : errorMsg || (
            <div>
              <p>用户信息：</p>
              <p>用户名：{userInfo.name}</p>
              <p>介绍：{userInfo.info}</p>
            </div>
          )}
        <button onClick={() => this.props.getUserInfo(23)}>请求用户信息</button>
      </div>
    )
  }
}

export default connect(({ userInfoData }) => ({ userInfoData }), {
  /** react-redux提供的简单写法 */

  getUserInfo,
})(UserInfo)
