import React from 'react';
import logo from './logo-108.png';
import './logo.css';

class Logo extends React.Component {
  render () {
    return (
      <div className="c-logo">
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}

export default Logo;
