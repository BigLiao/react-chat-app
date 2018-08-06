import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import '@/common/style/index.css';
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRouter from './components/authRouter';
import store from './store';
import Userinfo from './container/userinfo/userinfo';

import './util/http';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRouter></AuthRouter>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/userinfo" component={Userinfo}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
