import React from 'react';
import logo from './logo.png';
import style from  './logo.css';

class Logo extends React.Component {
  render () {
    return (
      <div className={style.logo}>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}

export default Logo;
