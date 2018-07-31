import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const publicPaths = [
  '/login',
  '/register'
]

@withRouter
class AuthRouter extends React.Component {
  componentDidMount () {
    // console.log(this.props);
    if (publicPaths.indexOf(this.props.location.pathname) > -1) {
      return null;
    }
    axios.get('/user/info')
      .then(res => {
        if (res.data.code === 200) {

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