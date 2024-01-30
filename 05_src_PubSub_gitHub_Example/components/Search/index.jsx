import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  // search = () =>{
  //   //获取用户的输入，解构赋值的连续写法
  //   const {keyWordElement:{value:keyWord}} = this
  //   //发送网络请求
  //   axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(res=>{
  //       console.log(res.data)
  //       // this.props.saveUserAvatars(res.data.items)
  //       //请求成功通知List更新状态
  //   },err=>{
  //       console.log(err)
  //   })
  // }
  search = () => {
    console.log('Search组件发布消息data了')
    //获取用户的输入（连续解构赋值+重命名）
    const {keyWordElement:{value:keyWord}} = this
    //发送请求前通知LIst组件更新状态
    PubSub.publish('stateObj',{isFirst:false,isLoading:true})
    //发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(res=>{
      //请求成功后通知List组件进行更新
      PubSub.publish('stateObj',{isLoading:false,users:res.data.items})
    },err=>{
      //请求失败后通知List组件进行更新
      PubSub.publish('stateObj',{isLoading:false,err:err.message})
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
