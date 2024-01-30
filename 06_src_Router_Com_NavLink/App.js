import React, { Component } from 'react'
import { NavLink,Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <Header />
          </div>
        </div>
        {/* 在原生html中，靠<a></a>标签跳转不同的页面
        */}
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* 在React中靠路由链接实现组件切换 */}
              <NavLink activeClassName="about-active" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="home-active" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
              {/* 注册路由 */}
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
