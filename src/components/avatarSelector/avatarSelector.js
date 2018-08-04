import React from 'react';
import {female, male} from '@/assets/images/index.js';
import './avatarSelector.css';

class AvatarItem extends React.Component {
  render () {
    return (
      <li className={'avatar-item  ' + (this.props.active ? 'active' : '')} key={this.props.name} onClick={() => this.props.clickAvatar(this.props.name)}>
        <img src={this.props.url} className="avatar-img" alt={this.props.name}></img>
      </li>
    )
  }
}

class AvatarSelector extends React.Component {
  constructor (props) {
    super(props);
    this.clickAvatar = this.clickAvatar.bind(this);
    this.state = {
      avatar: ''
    }
  }
  clickAvatar (name) {
    console.log(name);
    console.log(this);
    this.setState({
      avatar: name
    })
  }
  render () {
    const maleAvatarList = male.map(filename => {
      return {
        url: require(`@/assets/images/male/${filename}`),
        name: filename.split('.')[0]
      };
    });
    const femaleAvatarList = female.map(filename => {
      return {
        url: require(`@/assets/images/female/${filename}`),
        name: filename.split('.')[0]
      };
    });
    const avatarList = this.props.gender === 'male' ? maleAvatarList : femaleAvatarList;
    return (
      <div className="c-avatarSelector">
        <p className="title">请选择头像</p>
        <ul className="avatar-list">
          {avatarList.map(item => 
            (<AvatarItem
              name={item.name}
              url={item.url}
              key={item.name}
              active={this.state.avatar === item.name}
              clickAvatar={this.clickAvatar}
              >
            </AvatarItem>)
          )}
        </ul>
        
      </div>
    )
  }
}

export default AvatarSelector;