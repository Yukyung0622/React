import React, { Component } from 'react';

class StateComponent1 extends Component {

    //state 선언
    state = {num1 : 1, num2: 1}

    render() {

        // 상태값 선언
        let stateNum1 = this.state.num1;
        let stateNum2 = this.state.num2;

        return (
            <div className='StateComponent1'>
                <h5>StateComponent1</h5>
                <p>
                    상태값1 : {stateNum1}<br/>
                </p>

                <button onClick={()=>{this.setState({num1: stateNum1 + 1})}}>+</button>
                <button onClick={()=>{this.setState({num1: stateNum1 - 1})}}>-</button>
                
                <p>
                    상태값2 : {stateNum2}<br/>
                </p>

                <button onClick={()=>{this.setState({num1: stateNum2 + 1})}}>+</button>
                <button onClick={()=>{this.setState({num1: stateNum2 - 1})}}>-</button>
                
            </div>
        );
    }
}

export default StateComponent1;