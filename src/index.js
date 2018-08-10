import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '@/common/style/index.less';
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRouter from './components/authRouter';
import store from './store';
import Userinfo from './container/userinfo/userinfo';
import Main from './container/main/main';

import './util/http';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <AuthRouter></AuthRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/userinfo" component={Userinfo}></Route>
            <Route component={Main}></Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
