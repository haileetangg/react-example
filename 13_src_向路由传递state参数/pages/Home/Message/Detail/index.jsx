import React, { Component } from 'react'
import qs from 'querystring'

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
    const { search } = this.props.location
    const { id,title } = qs.parse(search.slice(1))
    const resultObj = detailData.find((detaiObj)=>{
        return detaiObj.id === id
    })
    console.log(resultObj,'resultObj')
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{resultObj?.content}</li>
      </ul>
    )
  }
}
