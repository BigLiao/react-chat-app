import axios from 'axios';
import { getRedirctUrl } from '../util';

const REGISTER_SUCCESS = 'register success';
const ERROR_MSG = 'error msg';
const LOGIN_SUCCESS = 'login success';
const LOAD_USERINFO_SUCCESS = 'load userinfo success';

const initialState = {
  isAuth: false,
  error: '',
  user: '',
  password: '',
  password_confirmation: '',
  gender: '',
  redirectTo: '',
  introduction: '',
  avatar: '',
  birthday: ''
}

// reducer
export function user (state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, isAuth: true, error: '', redirectTo: getRedirctUrl(action.payload), ...action.payload};
    case ERROR_MSG:
      return {...state, isAuth: false, error: action.msg};
    case LOGIN_SUCCESS:
      return {...state, isAuth: true, error: '', redirectTo: getRedirctUrl(action.payload), ...action.payload};
    case LOAD_USERINFO_SUCCESS:
      return {...state, isAuth: true, ...action.payload};
    default:
      return state;
  }
};

// actionCreator
function errorMsg (msg) {
  return {
    type: ERROR_MSG,
    msg: msg
  };
}

function registerSuccess (userinfo) {
  return {
    type: REGISTER_SUCCESS,
    payload: userinfo
  };
}

function loginSuccess (userinfo) {
  return {
    type: LOGIN_SUCCESS,
    payload: userinfo
  }
}

export function loadUserinfo (userinfo) {
  return {
    type: LOAD_USERINFO_SUCCESS,
    payload: userinfo
  }
}

// 用户操作 dispatch
export function register ({user, password, passwordConfirmation, gender}) {
  if (!user || !password || !passwordConfirmation) {
    return errorMsg('必须输入用户名和密码');
  }
  if (password !== passwordConfirmation) {
    return errorMsg('密码和确认密码不匹配');
  }
  return dispatch => {
    axios.post('/user/register', {
      user,
      password_confirmation: passwordConfirmation,
      password,
      gender
    }).then(res => {
      if (res.data.code === 200) {
        dispatch(registerSuccess({user, password, password_confirmation: passwordConfirmation, gender}));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    })
  }
}

export function login ({user, password}) {
  // if ()
  return dispatch => {
    axios.post('/user/login', {
      user, password
    }).then(res => {
      if (res.status === 200) {
        if (res.data.code === 200) {
          dispatch(loginSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      } else {
        dispatch(errorMsg('服务器错误'))
      }
    })
  }
}
