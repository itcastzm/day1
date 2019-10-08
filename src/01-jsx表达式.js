import React from 'react';

let username = '国务院总理';
let obj = {
  name: '你开心就好！'
}

let sum = function(a, b) {
  return a + b;
}

function App() {
  return (
    <div >
      111
      {/* 首先需要在标签写js代码 先写花括号 */}
      {/* 数字表达式 */}
      <h2>{ 1 + 1  }</h2>
      {/* 字符串表达式 */}
      <h2>{ '我不是五五开' }</h2>
      {/* 布尔类型 */}
      <h2>{  true  } { false }</h2>
      <h2>{  null  } { undefined }</h2>
      {/* 变量 */}
      <h2>{  username }</h2>
      {/* 对象 */}
      <h2>{ obj.name }</h2>
      {/* <h2>{ obj }</h2> */}
      {/* 函数 */}
      <h2>{ sum('123', 456) }</h2>
      {/* 三元表达式 */}
      <h2> { false ? '富婆' : '屌丝'} </h2>
    </div>
  );
}

export default App;
