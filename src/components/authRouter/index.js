import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import  { connect } from 'react-redux';
import { loadUserinfo } from '../../store/user.redux.js';

const publicPaths = [
  '/login',
  '/register'
]

@withRouter
@connect(
  null,
  {loadUserinfo}
)
class AuthRouter extends React.Component {
  componentDidMount () {
    if (publicPaths.indexOf(this.props.location.pathname) > -1) {
      return null;
    }
    axios.get('/user/userinfo')
      .then(res => {
        if (res.data.code === 200) {
          this.props.loadUserinfo(res.data.data);
        } else if (res.data.code === 401) {
          this.props.history.push('/login')
        }
      })
  }

  render () {
    return null;
  }
}

export default AuthRouter;