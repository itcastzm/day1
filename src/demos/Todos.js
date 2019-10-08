import React, { Component } from 'react'

export default class Todos extends Component {
    state={
        list: ['吃饭', '睡觉'],
        inpValue:  ''
    }


    handleChange=(e)=> {
        this.setState({
            inpValue: e.target.value
        })
    }

    handleClick=()=> {
        let { inpValue, list } = this.state;

        if (list.indexOf(inpValue) == -1 ) {
            list.push(inpValue);

            this.setState({
                inpValue:'',
                list
            })
        } 
    }
    handleDel(id){
        let { list } = this.state;
        list.splice(id, 1);
        this.setState({
            list
        });
    }

    render() {
        return (
            <div  className="container">
                <input value={ this.state.inpValue } onChange={this.handleChange} />
                <button  onClick={this.handleClick}>todos</button>
                {
                    this.state.list.map((v, i, a)=> <h3  onClick={this.handleDel.bind(this, i)}>{ v }</h3>)
                }
                
            </div>
        )
    }
}
