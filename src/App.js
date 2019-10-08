import React, { Component } from 'react'

class App1 extends Component {
  render() {
    return (
      <div>
        我是类组件
      </div>
    )
  }
}

function App2() {
  return (
    <div>
      我是函数式组件
    </div>
  )
}


export default class App extends Component {


  render() {

    let  Comp = App2;

    return (
      <div >
        <Comp />
      </div>
    )
  }
}

