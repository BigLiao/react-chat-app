import React from 'react';
import Logo from '../../components/logo';
import { List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.register = this.register.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      username: '',
      password: ''
    };
    this.login = this.login.bind(this);
  }

  register () {
    this.props.history.push('/register');
  }

  login () {
    console.log(this.state)
  }

  handlerChange (key, value) {
    this.setState({
      [key]: value
    })
  }

  render () {
    return (
      <div>
        <Logo></Logo>
        <h1>这是登录页面</h1>
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handlerChange('username', v)}>用户</InputItem>
            <InputItem type="password" onChange={v => this.handlerChange('password', v)}>密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.login}>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }

}

export default Login;
