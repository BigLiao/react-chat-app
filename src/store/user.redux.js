import axios from 'axios';

const REGISTER_SUCCESS = 'register success';
const ERROR_MSG = 'error msg';

const initialState = {
  isAuth: false,
  error: '',
  user: '',
  password: '',
  password_confirmation: '',
  type: ''
}

// reducer
export function user (state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, isAuth: true, error: '', ...action.payload};
    case ERROR_MSG:
      return {...state, isAuth: false, error: action.msg}
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

function registerSuccess (userInfo) {
  return {
    type: REGISTER_SUCCESS,
    payload: userInfo
  };
}

// 用户操作
export function register ({user, password, passwordConfirmation, type}) {
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
      type
    }).then(res => {
      if (res.status === 200) {
        if (res.data.code === 200) {
          dispatch(registerSuccess({user, password, password_confirmation: passwordConfirmation, type}));
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      } else {
        dispatch(errorMsg('服务器错误，请稍后重试'));
      }
    })
  }
}