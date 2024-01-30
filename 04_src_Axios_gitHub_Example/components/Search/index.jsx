import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () =>{
    //获取用户的输入，解构赋值的连续写法
    const {keyWordElement:{value:keyWord}} = this
    //发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(res=>{
        console.log(res.data)
        this.props.saveUserAvatars(res.data.items)
    },err=>{
        console.log(err)
    })
  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbottron-heading'>搜索github</h3>
        <div>
            <input 
                type="text" 
                ref={c => this.keyWordElement = c}
                placeholder='enter the name you search' />&nbsp;
            <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
