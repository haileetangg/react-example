import React, { Component } from 'react'

export default class Detail extends Component {
    state = {
        detailData:[
            {id:'01',content:'hello,china'},
            {id:'02',content:'hello,shenzhen'},
            {id:'03',content:'hello,hailee'}
        ]
    }
  render() {
    const { detailData } = this.state
    //  接收params参数
    const { id,title } = this.props.match.params
    const resultObj = detailData.find((detaiObj)=>{
        return detaiObj.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{resultObj.content}</li>
      </ul>
    )
  }
}
