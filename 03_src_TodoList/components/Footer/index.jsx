import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleChange = (event)=>{
    this.props.checkedAll(event.target.checked)
  }
  handleClearAll = ()=>{
    this.props.clearAll()
  }
  render() {
    const { todos } = this.props
    //获取勾选的数量
    let checkedNum = todos.reduce((pre,cur)=>{
      return pre + (cur.isDone? 1 : 0)
    },0)
    let allNum = todos.length
    return (
      <div className='todo-footer'>
        <label>
          <input type="checkbox"
          checked ={checkedNum === allNum && allNum !== 0}
          onChange ={this.handleChange}
          />
        </label>
        <span>
          <span>已完成{checkedNum}</span>/ 全部{allNum}
        </span>
        <button className='btn btn-danger' onClick={this.handleClearAll}>清除已完成任务</button>
      </div>
    )
  }
}
