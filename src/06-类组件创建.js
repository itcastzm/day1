// 1. 引入React模块
import React from 'react';

// 2. 用class定义类组件
class App extends React.Component {

  // 3. 实现render方法
  render() {

    // 4 return后面接jsx
    return(<div className="container">
      <h2>我是类组件</h2>
      </div>
    )
  }
}

export default  App;
