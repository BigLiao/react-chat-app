import React from 'react';
import {List} from 'antd-mobile';
import axios from 'axios';

class Yard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: []
    };
    this.getUserList = this.getUserList.bind(this);
  }
  getUserList () {
    axios.get('/user/list').then(res => {
      this.setState({
        userList: res.data.data
      })
    })
  }
  componentDidMount () {
    this.getUserList();
  }
  render () {
    const Item = List.Item;
    const Brief = Item.Brief;
    return (
      <List>
        {this.state.userList.map(item => {
          let avatar;
          try {
            avatar = require(`@/assets/images/${item.gender}/${item.avatar}.png`)
          } catch(e) {
            avatar = require(`@/assets/images/${item.gender}/astronaut.png`)
          }
          return (<Item 
          key={item.user}
          thumb={
            <img alt="avatar" src={avatar}></img>
          }
          >
            <span style={{fontSize: '18px', lineHeight: '1'}}>{item.user}</span>
            <Brief style={{lineHeight: 1, marginTop: 0, fontSize: '12px'}}>{item.introduction}</Brief>
          </Item>
        )}
      )}
      </List>
    )
  }
}

export default Yard;