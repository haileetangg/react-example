import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import Header from './components/Header'
import MyNavLink from './components/MyLink' 
import { Button } from 'antd'
// import 'antd/dist/reset.css'

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
        <Button type="primary">点我高亮</Button>
      </div>
    )
  }
}
