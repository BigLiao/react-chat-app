

const REGISTER_SUCCESS = 'REGUSTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';


// reducer
export function user (state, action) {
  return state;
}

function errorMsg (msg) {
  return {
    msg,
    type: ERROR_MSG
  }
}

export function register ({user, password, password_Confirmation, type}) {
  if (!user ||!password || !password_Confirmation) {
    return errorMsg('用户名密码必须输入');
  }
  if (password !== password_Confirmation) {
    return errorMsg('密码和确认密码不一致');
  }
}

