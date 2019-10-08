import React from 'react';


let  html = '<a href="https://www.jd.com">点我</a>';

let  props = {
  className: 'btn',
  'data-index': '234'
}

function App() {

  return (
    // 标签内部的键值对 叫标签属性
    // 1. class  => className
    <div  className="container"  >
 
         <h3> 111</h3>

          {/* // 2. for  => htmlFor */}
        <h3>
          <label htmlFor="username">姓名：</label>
          {/* autocomplete =>  autoComplete jsx属性追求 小驼峰 */}
          <input  id="username" type="text"  name="username"  autoComplete="off" />
        </h3>
        {/* 3. 变量为html字符串 */}
        {/* <h3>{ html}</h3> */}
        <h3  dangerouslySetInnerHTML={{__html: html}}></h3>
        {/* 4. 自定义属性  建议大家  data-* */}
        <h3  data-index="123">自定义属性</h3>
        {/* 5. 布尔值 */}
        <input  type="checkbox"  checked />
        <input  type="checkbox"  checked={ true } />
        <input  type="checkbox"  checked={ false } />
        <input  type="checkbox"  checked={ "false" } />
        {/* 6. 多个属性时候  可以使用 es6 扩展符   ... */}
      <div>
        <button  { ...props } >点点我</button>
      </div>


      {/* 多行注释 */}
      {/* 多行注释
      多行注释 */}
      {/* 单行注释 */}
      { 
         //单行注释 
      }


    </div>

    
  );
}

export default App;
