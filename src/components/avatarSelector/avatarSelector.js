import React from 'react';
import propTypes from 'prop-types';
import {female, male} from '@/assets/images/index.js';
import './avatarSelector.css';

class AvatarItem extends React.Component {
  static propTypes = {
    active: propTypes.bool,
    name: propTypes.string,
    url: propTypes.string,
    clickAvatar: propTypes.func
  }
  render () {
    return (
      <li className={'avatar-item  ' + (this.props.active ? 'active' : '')} key={this.props.name} onClick={() => this.props.clickAvatar(this.props.name)}>
        <img src={this.props.url} className="avatar-img" alt={this.props.name}></img>
      </li>
    )
  }
}

class AvatarSelector extends React.Component {
  static propTypes = {
    avatar: propTypes.string,
    onChange: propTypes.func
  }
  // constructor (props) {
  //   super(props);
  // }
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
              active={this.props.avatar === item.name}
              clickAvatar={this.props.onChange}
              >
            </AvatarItem>)
          )}
        </ul>
        
      </div>
    )
  }
}

export default AvatarSelector;