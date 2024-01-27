import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  //对接收的props进行类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handleKeyUp = (event) =>{
    //解构赋值取出event身上重要的属性
    const { keyCode,target } = event
    //判断是否为回车按键
    if(keyCode !== 13) return
    //判断输入是否为空
    if(target.value.trim() == ''){
      alert('输入不能为空！')
      return
    }
    //生成一个todo对象
    const todoObj = { id:nanoid(), name:target.value, isDone:false }
    //调用父组件定义的方法向父组件传递一个对象
    this.props.addTodo(todoObj)
    //添加之后清空输入框
    target.value=''
  }
  render() {
    return (
      <div className='todo-header'>
        <input 
          type="text" 
          onKeyUp = { this.handleKeyUp }
          placeholder='请输入你的任务名称，按回车键确认'/>
      </div>
    )
  }
}
