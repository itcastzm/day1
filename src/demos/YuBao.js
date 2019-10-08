import React, { Component } from 'react'

export default class YuBao extends Component {

    state={
        username: '小红'
    }

    handleClick=()=> {
        this.setState({
            username:  this.state.username === '小明'?  '小红': '小明'
        });
    }
    render() {
        return (
            <div className="container">
                <button className="btn" onClick={this.handleClick}>预报</button>
                <h3>{ this.state.username } 说今天会下雨</h3>
            </div>
        )
    }
}
