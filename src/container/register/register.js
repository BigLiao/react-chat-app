import React from 'react';
import Logo from '../../components/logo'
import { List, InputItem, Button, WingBlank, WhiteSpace, Radio } from 'antd-mobile';
import store from '../../store/index'

const RadioItem = Radio.RadioItem;

class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = store.getState();

    this.handlerChange = this.handlerChange.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  handlerChange (key, value) {
    store.dispatch({type: 'ok'})
  }

  login () {

  }

  register () {
    console.log(this.state);
  }

  render () {
    return (
      <div>
        <Logo></Logo>
        <h1>这是注册页面</h1>
        <WingBlank>
          <List renderHeader={() => '注册信息'}>
            <InputItem onChange={v => this.handlerChange('username', v)}>用户名</InputItem>
            <InputItem type="password" onChange={v => this.handlerChange('password', v)}>密码</InputItem>
            <InputItem type="password" onChange={v => this.handlerChange('passwordConfirmation', v)}>确认密码</InputItem>
          </List>
            <WhiteSpace></WhiteSpace>
          <List renderHeader={() => '我是'}>
            <RadioItem checked={this.state.type === 'genius'} onChange={v => this.handlerChange('type', 'genius')}>牛人</RadioItem>
            <RadioItem checked={this.state.type === 'boss'} onChange={v => this.handlerChange('type', 'boss')}>Boss</RadioItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.register}>注册</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.login}>登录</Button>
        </WingBlank>
        
      </div>
    )
  }
}

export default Register;
