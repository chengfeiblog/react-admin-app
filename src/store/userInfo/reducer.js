import * as type from './action-type'

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: '',
}

export const userInfoData = (state = initState, action = {}) => {
  switch (action.type) {
  case type.GET_USER_INFO_REQUEST:
    return {
      ...state,
      isLoading: true,
      userInfo: {},
      errorMsg: '',
    }
  case type.GET_USER_INFO_SUCCESS:
    return {
      ...state,
      isLoading: false,
      userInfo: action.userInfo,
      errorMsg: '',
    }
  case type.GET_USER_INFO_FAIL:
    return {
      ...state,
      isLoading: false,
      userInfo: {},
      errorMsg: '请求错误',
    }
  default:
    return state
  }
}

const handleData = (state = { isFetching: true, data: {} }, action) => {
  switch (action.type) {
  case type.REQUEST_DATA:
    return { ...state, isFetching: true }
  case type.RECEIVE_DATA:
    return { ...state, isFetching: false, data: action.data }
  default:
    return { ...state }
  }
}

export const httpData = (state = {}, action) => {
  switch (action.type) {
  case type.RECEIVE_DATA:
  case type.REQUEST_DATA:
    return {
      ...state,
      [action.category]: handleData(state[action.category], action),
    }
  default:
    return { ...state }
  }
}
