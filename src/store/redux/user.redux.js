

const REGISTER_SUCCESS = 'REGUSTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initialState = {
  error: '',
  user: '',
  password: '',
  password_Confirmation: '',
  type: ''
}


// reducer
export function user (state = initialState, action) {
  return state;
}

// actionCreator
function errorMsg (msg) {
  return {
    msg,
    type: ERROR_MSG
  }
}

// actionCreator
export function register ({user, password, password_Confirmation, type}) {
  if (!user ||!password || !password_Confirmation) {
    return errorMsg('用户名密码必须输入');
  }
  if (password !== password_Confirmation) {
    return errorMsg('密码和确认密码不一致');
  }
}

