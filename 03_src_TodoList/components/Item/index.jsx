import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {isMouseEnter: false} //标识鼠标移入移出

  //鼠标移入跟移出的回调
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({isMouseEnter:flag})
    }
  }
  //checkbox勾选的回调
  handleSelect = (selectId)=>{
    return (event)=>{
      console.log(selectId,event.target.checked,'isSelect--')
      this.props.updateTodo(selectId,event.target.checked)
    }
  }
  //删除一个todo项
  handleDelete = (id)=>{
    console.log(id)
    if(window.confirm('确认删除吗')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { isMouseEnter } = this.state
    const { id,name,isDone } = this.props
    return (
      <li onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
          style={{background:isMouseEnter?'#ddd':'white'}}
      >
        <label>
          <input 
            type="checkbox" 
            checked={isDone}
            onChange={this.handleSelect(id)}
          />
          <span>{name}</span>
          <button 
            className='btn btn-danger' 
            onClick={()=>this.handleDelete(id)}
            style={{display:isMouseEnter?'block':'none'}}>删除</button>
        </label>
      </li>
    )
  }
}
