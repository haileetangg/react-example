import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home组件的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/message" component={Message}></Route>
            <Route path="/home/news" component={News}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
