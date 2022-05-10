import React, { Component } from 'react';

class LifeCycleComponent extends Component {

    state={num:0};

    constructor(){
        super();
        console.log('constructor...');
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps...');
        return null;
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        return (
            <div className='LifeCycleComponent'>
                <h4>LifeCycleComponent</h4>
                <p>
                    num : {this.state.num}<br/>
                    <button onClick={()=>{this.setState({num:this.state.num + 1})}}>증감</button>
                </p>
                
            </div>
        );
    }

    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
}


export default LifeCycleComponent;