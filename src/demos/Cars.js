import React, { Component } from 'react'


class Car1 extends Component {
    render() {
        return <span className="car">奥拓</span>
    }
}
class Car2 extends Component {
    render() {
        return <span className="car">奥迪</span>
    }
}

class Car3 extends Component {
    render() {
        return <span className="car">玛莎拉蒂</span>
    }
}
function Car4() {
    return<span className="car">路虎</span>
}
function Car5() {
    return<span className="car">奇瑞</span>
}

const carlist = [ Car1, Car2, Car3, Car4, Car5 ]

export default class Cars extends Component {
    
    state = {
        target: null
    }

    handleClick=()=> {

        let num = Math.floor(Math.random()*10) % 5;

        this.setState({
            target: carlist[num]
        });
    }
    
    render() {

        let { target } = this.state;

        let Comp = target;

        return (
            <div className="container">

                { carlist.map((V, i) => <V  key={i} /> )}

                <div><button onClick={ this.handleClick } className="btn">抽奖</button></div>

                <h3> 抽中： { target ? <Comp  /> : null }</h3>
            </div>
        )
    }
}
