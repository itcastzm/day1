import React from 'react';


function App() {

  return (
    <div  className="container"  >

      {/* 1. 行内样式 单位不用加px */}
      {/* 2. 样式属性名  遵守小驼峰式写法 */}      
        <button style={{
          width: 200,
          height: 100,
          backgroundColor: 'pink',
          borderRadius: 50
        }}>点我</button>
 
    </div>

    
  );
}

export default App;
