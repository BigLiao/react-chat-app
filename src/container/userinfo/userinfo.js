import React from 'react';
import {NavBar, List, WhiteSpace, WingBlank, DatePicker, TextareaItem, Button, Toast} from 'antd-mobile';
import AvatarSelector from '@/components/avatarSelector/avatarSelector';
import store from '../../store';
import axios from 'axios';
import time from '@/util/time';

class Userinfo extends React.Component {
  constructor (props) {
    super(props);
    const state = store.getState().user;
    this.state = {
      birthday: state.birthday ? new Date(state.birthday) : new Date('1999-01-01'),
      introduction: state.introduction || '',
      avatar: state.avatar || '',
      gender: state.gender
    };
    store.subscribe(() => {
      const state = store.getState().user;
      this.setState({
        birthday: state.birthday ? new Date(state.birthday) : new Date('1999-01-01'),
        introduction: state.introduction || '',
        avatar: state.avatar || '',
        gender: state.gender
      });
    })
    this.submit = this.submit.bind(this);
  };
  onChange (key, value) {
    this.setState({
      [key]: value
    })
  }
  submit () {
    axios.post('/user/userinfo/update', {
      avatar: this.state.avatar,
      birthday: time(this.state.birthday).formatDate(),
      introduction: this.state.introduction
    }).then(res => {
      if (res.data.code === 200) {
        Toast.success('修改资料成功！');
      }
    })
  };
  render () {
    return (
      <div>
        <NavBar>完善信息页面</NavBar>
        <WhiteSpace size="lg"></WhiteSpace>
        <WingBlank size="sm">
          <AvatarSelector
            gender={this.state.gender}
            avatar={this.state.avatar}
            onChange={avatar => this.onChange('avatar', avatar)}
          ></AvatarSelector>
          <WhiteSpace></WhiteSpace>
          <p className="title">请完善相关信息</p>
          <List>
            <DatePicker
              mode="date"
              format="YYYY-MM-DD"
              title="出生日期"
              extra="请选择"
              minDate={new Date('1970-01-01')}
              maxDate={new Date()}
              value={this.state.birthday}
              onChange={date => this.onChange('birthday', date)}
            >
              <List.Item arrow="horizontal">生日</List.Item>
            </DatePicker>
            <TextareaItem
              placeholder="介绍一下自己，让别人更了解你哦~"
              title="个人简介"
              autoHeight
              rows={5}
              labelNumber={5}
              value={this.state.introduction}
              onChange={v => this.onChange('introduction', v)}
            />
          </List>
          <WhiteSpace size="lg"></WhiteSpace>
          <Button type="primary" onClick={this.submit}>保存</Button>
          <WhiteSpace size="xl"></WhiteSpace>
          <WhiteSpace size="lg"></WhiteSpace>
        </WingBlank>
        
      </div>
    )
  }
}

export default Userinfo;
