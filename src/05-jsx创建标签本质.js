import React from 'react';


function App() {

  // 1 jsx版本
    return (
      <div  className="container"  >
        <h3>黑马老师开车</h3>
        <button>点我</button>
      </div>
  );

  // 2 纯js版本
    // return React.createElement('标签名', '标签属性',  '子标签')
    // return React.createElement('div', {className:'container'},
    //  [
    //    React.createElement('h3', null,  '黑马老师开车'),
    //    React.createElement('button', null,  '点我')
    //  ]
    // );

    // 3 jsx js 混合版本
  //   return React.createElement('div', {className:'container'},
  //   [
  //     React.createElement('h3', null,  '黑马老师开车'),
  //     <button>点我</button>
  //   ]
  //  );
}

export default App;
