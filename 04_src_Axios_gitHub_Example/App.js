import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {
    users:[]
  }
  //获取用户头像的方法
  saveUserAvatars = (users) => {
    this.setState({users})
  }
  render() {
    const {users} = this.state
    return (
      <div className='contianer'>
        <Search saveUserAvatars={this.saveUserAvatars}/>
        <List users={users}/>
      </div>
    )
  }
}
