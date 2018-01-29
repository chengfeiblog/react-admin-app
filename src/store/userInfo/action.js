import * as types from './action-type'

function getUserInfoRequest () {
  return {
    type: types.GET_USER_INFO_REQUEST,
  }
}

function getUserInfoSuccess (userInfo) {
  return {
    type: types.GET_USER_INFO_SUCCESS,
    userInfo,
  }
}

function getUserInfoFail () {
  return {
    type: types.GET_USER_INFO_FAIL,
  }
}
/** 异步请求实例 */
export function getUserInfo (params) {
  return {
    types: [
      types.GET_USER_INFO_REQUEST,
      types.GET_USER_INFO_SUCCESS,
      types.GET_USER_INFO_FAIL,
    ],
    promise: client =>
      client.get(`http://localhost:8080/api/user.json?params=${params}`),
    // /** 之后处理 */
    // afterSuccess:  (dispatch, getState, response) => {
    //   dispatch(another_action_creator(response));
    // },
    // /** 其他数据 */
    // ortherData: ortherData
  }
}
