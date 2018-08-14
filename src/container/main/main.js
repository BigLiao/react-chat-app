import React from 'react';
import {TabBar, NavBar} from 'antd-mobile';
import {Route, Switch} from 'react-router-dom';
import Yard from '../yard/yard.js';
import Contact from '../contact/contact';
import Me from '../me/me';

import style from  "./main.css";

// eslint-disable-next-line
const tabList = [
  {
    title: '广场',
    key: 'yard',
    icon: 'find',
    iconSize: 26
  }, {
    title: '聊天',
    key: 'chat',
    icon: 'chat',
    iconSize: 22
  }, {
    title: '我的',
    key: 'me',
    icon: 'me',
    iconSize: 22
  }
]

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.tabList = [
      {
        title: '广场',
        key: 'yard',
        icon: 'find',
        iconSize: 26,
        pathname: '/yard',
        component: Yard
      }, {
        title: '聊天',
        key: 'chat',
        icon: 'chat',
        iconSize: 22,
        pathname: '/contact',
        component: Contact
      }, {
        title: '我的',
        key: 'me',
        icon: 'me',
        iconSize: 22,
        pathname: '/me',
        component: Me
      }
    ];
    console.log(this.props.location)
  }
  switchTab (pathname) {
    this.props.history.push(pathname)
  }
  render () {
    const currentTab = this.tabList.find(item => item.pathname === this.props.location.pathname);
    return (
      <div className={style.main}>
        <div className={style.header}>
          <NavBar
            leftContent={currentTab.title}
          >UChat</NavBar>
        </div>
        <div className={style.body}>
          <Switch>
            {this.tabList.map(item => (
              <Route path={item.pathname} component={item.component} key={item.key}></Route>
            ))}
            
          </Switch>
        </div>
        <div className={style.footer}>
          <TabBar>
            {this.tabList.map(item => (
              <TabBar.Item
                title={item.title}
                key={item.key}
                onPress={() => this.switchTab(item.pathname)}
                selected={this.props.location.pathname===item.pathname}
                icon={
                  <img width={item.iconSize} height={item.iconSize} src={require(`@/assets/icons/${item.icon}.svg`)} alt="tab"></img>
                }
                selectedIcon={
                  <img width={item.iconSize} height={item.iconSize} src={require(`@/assets/icons/${item.icon}-a.svg`)} alt="tab-active"></img>
                }
              ></TabBar.Item>
            ))}
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Main;