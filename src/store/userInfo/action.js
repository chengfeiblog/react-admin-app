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
export function getUserInfo () {
  return function (dispatch) {
    dispatch(getUserInfoRequest())

    return fetch('http://localhost:8080/api/user.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        dispatch(getUserInfoSuccess(json))
      })
      .catch(() => {
        dispatch(getUserInfoFail())
      })
  }
}
