import React from 'react';

/**
 *  1. 新建一个数组
    2. jsx遍历数组
    3. 返回方便转化成dom结构的值
 * 
 */


// 1. 新建一个数组
let list = ['诸葛亮', '曹操', '刘备', '赵云', '关羽'];

function App() {

// js 代码可以在这里写

  return (
    <div >
      {/* 版本一 */}
       {/* 2. jsx遍历数组 */}
       {/* { list.map(function(v, i, a) {
         // v 代表每一个元素  i代表索引  a代表数组本身
        //  3. 返回方便转化成dom结构的值
          return (
            //注意数组遍历根元素需要加一个key属性
            <h2 key={i} >{ v }</h2>
          )
       }) } */}

       {/* 版本二 */}
       {/* { list.map((v, i, a)=> { 
          return (
            //注意数组遍历根元素需要加一个key属性
            <h2 key={i} >{ v }</h2>
          )
       }) } */}

       {/* 版本三 */}
       { list.map((v, i, a)=> <h2 key={i} >{ v }</h2> ) }


    </div>
  );
}

export default App;
