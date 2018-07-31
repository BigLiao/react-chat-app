import React from 'react';
import Logo from '../../components/logo';
import { List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/user.redux.js';

import './login.css';

@connect(
  state => state.user,
  {login}
)
class Login extends React.Component {
  constructor (props) {
    super(props);
    this.register = this.register.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      user: '',
      password: ''
    };
    this.login = this.login.bind(this);
  }

  register () {
    this.props.history.push('/register');
  }

  login () {
    this.props.login(this.state);
  }

  handlerChange (key, value) {
    this.setState({
      [key]: value
    })
  }

  render () {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <h1>这是登录页面</h1>
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handlerChange('user', v)}>用户</InputItem>
            <InputItem type="password" onChange={v => this.handlerChange('password', v)}>密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.login}>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.register}>注册</Button>
          <WhiteSpace></WhiteSpace>
          <p className="login-error">{this.props.error}</p>
        </WingBlank>
      </div>
    )
  }

}

export default Login;
