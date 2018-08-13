import React from 'react';
import {TabBar} from 'antd-mobile';

import style from  "./main.css";

class Main extends React.Component {
  render () {
    return (
      <div className={style.main}>
        <div className={style.header}>头部</div>
        <div className={style.body}>body</div>
        <div className={style.footer}>
          <TabBar>
            <TabBar.Item
              title="广场"
              key="find"
              selected={true}
              icon={
                <img width="26px" height="26px" src={require('@/assets/icons/find.svg')} alt="tab"></img>
              }
              selectedIcon={
                <img width="26px" height="26px" src={require('@/assets/icons/find-a.svg')} alt="tab-active"></img>
              }
            ></TabBar.Item>
            <TabBar.Item
              title="聊天"
              key="contact"
              selected={true}
              icon={
                <img width="22px" height="22px" src={require('@/assets/icons/chat.svg')} alt="tab"></img>
              }
              selectedIcon={
                <img width="22px" height="22px" src={require('@/assets/icons/chat-a.svg')} alt="tab-active"></img>
              }
            ></TabBar.Item>
            <TabBar.Item
              title="我的"
              key="me"
              selected={true}
              icon={
                <img width="22px" height="22px" src={require('@/assets/icons/me.svg')} alt="tab"></img>
              }
              selectedIcon={
                <img width="22px" height="22px" src={require('@/assets/icons/me-a.svg')} alt="tab-active"></img>
              }
            ></TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Main;