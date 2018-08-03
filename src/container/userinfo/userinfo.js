import React from 'react';
import {NavBar, List, InputItem, WhiteSpace, WingBlank, DatePicker, TextareaItem} from 'antd-mobile';
import AvatarSelector from '@/components/avatarSelector/avatarSelector';

class Bossinfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date('1999-01-01')
    }
  }
  render () {
    return (
      <div>
        <NavBar>完善信息页面</NavBar>
        <WhiteSpace size="lg"></WhiteSpace>
        <WingBlank size="sm">
          <AvatarSelector></AvatarSelector>
          <p className="title">完善信息</p>
          <List>
            <DatePicker
              mode="date"
              format="YYYY-MM-DD"
              title="出生日期"
              extra="请选择"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item arrow="horizontal">生日</List.Item>
            </DatePicker>
            <TextareaItem
              placeholder="介绍一下自己，让别人更了解你哦~"
              title="个人简介"
              autoHeight
              rows={5}
              labelNumber={5}
            />
          </List>
        </WingBlank>
        
      </div>
    )
  }
}

export default Bossinfo;
