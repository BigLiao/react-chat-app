import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

@withRouter
class AuthRouter extends React.Component {
  componentDidMount () {
    axios.get('/user/list')
      .then(res => {
        console.log(res)
      })
  }

  render () {
    return null;
  }
}

export default AuthRouter;