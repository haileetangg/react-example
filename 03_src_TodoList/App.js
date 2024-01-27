import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里
  state = {
    todos:[
      {id:'001',name:'学习React',isDone:true},
      {id:'002',name:'学习Vue',isDone:false},
      {id:'003',name:'去健身',isDone:false},
    ]
  }
  addTodo = (todoObj) =>{
    console.log(todoObj,'todoObj')
    const { todos} = this.state
    //生成一个新的todos数组
    const newTodos = [todoObj,...todos]
    console.log(newTodos,'newTodos')
    //把新的todos赋值给state
    this.setState({todos: newTodos})
  }
  //updateTodo用于更新一个todoItem
  updateTodo = (id,isDone) =>{
    const { todos } = this.state
    const newTodos = todos.map((todo)=>{
      if(todo.id == id){
        return { ...todo,isDone:isDone }
      }else {
        return todo
      }
    })
    this.setState({todos:newTodos})
  }
  //deleteTodo用于删除一个todoItem
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo)=>{
      return todo.id != id
    })
    this.setState({todos:newTodos})
  }
  //checkedAll用于全选
  checkedAll = (isDone) =>{
    const { todos } = this.state
    const newTodos = todos.map((todo)=>{
      return { ...todo,isDone }
    })
    this.setState({todos:newTodos})
  }
  //clearAll清除所有已完成的
  clearAll = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todo)=>{
      return !todo.isDone
    })
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}/>
          <List todos={todos} 
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkedAll={this.checkedAll}
            clearAll={this.clearAll}
          />
        </div>
      </div>
    )
  }
}
