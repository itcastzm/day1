// 1. 引入React模块
import React, {Component,  Fragment} from 'react';
/**
 * 1. 声明state
  2. 使用state
  3. 改变state
 */

 let name = '小红'

 class App  extends Component {
  // 1. 声明state
    // state={
    //   name: '小红'
    // }

    // 第二种 声明state
  constructor() {
    // 注意点
    super();
    this.state = {
      name:'小红'
    };
  }

  handleClick=()=> {
    // 3.2 使用方法 setState  改变state
    this.setState({
      name: this.state.name == '小明' ? '小红' : '小明'
    });
  }

    render() {
      return(
        <div className="container">
        {/* 3. 改变state */}
        <button className="btn" onClick={ this.handleClick } >预报</button>
        {/* 2. 使用state */}
        <h3>{ this.state.name } 说今天会下雨!</h3>
        </div>
      )
    }
 }

export default  App;
