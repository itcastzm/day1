import React , { Component , Fragment} from 'react';

export default  class HelloWorld extends Component {

    render() {

        //这是jsx语法   jsx只是一种中间语法
        // return (
        //     <div id="helloworld">
        //         <h2>helloworld</h2> <h2>helloworld3</h2>
        //     </div>
        // ) 

        return (
            <Fragment>
                <h2>helloworld</h2> <h2>helloworld3</h2>
            </Fragment>
        ) 

    }
}