//创建React外壳组件
import React from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
const { Component } = React


// 创建并暴露App组件
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}
