import React from 'react';

import style from  "./main.css";

class Main extends React.Component {
  render () {
    return (
      <div className={style.main}>
        <div className={style.header}>头部</div>
        <div className={style.body}>body</div>
        <div className={style.footer}>footer</div>
      </div>
    )
  }
}

export default Main;