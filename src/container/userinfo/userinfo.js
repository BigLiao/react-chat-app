import React from 'react';
import {NavBar, List, InputItem, WhiteSpace, WingBlank, DatePicker, TextareaItem, Button} from 'antd-mobile';
import AvatarSelector from '@/components/avatarSelector/avatarSelector';
import store from '../../store';

class Userinfo extends React.Component {
  constructor (props) {
    super(props);
    const state = store.getState();
    this.state = {
      birthday: new Date('1999-01-01'),
      introduction: ''
    }
  };
  onChange (key, value) {
    this.setState({
      [key]: value
    })
  }
  render () {
    return (
      <div>
        <NavBar>完善信息页面</NavBar>
        <WhiteSpace size="lg"></WhiteSpace>
        <WingBlank size="sm">
          <AvatarSelector></AvatarSelector>
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
          <Button type="primary">保存</Button>
          <WhiteSpace size="xl"></WhiteSpace>
          <WhiteSpace size="lg"></WhiteSpace>
        </WingBlank>
        
      </div>
    )
  }
}

export default Userinfo;
