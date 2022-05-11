import React, { Component } from 'react';

class MyComponent1 extends Component {
    //state 선언
    state = {fColor: '#000', bColor: 'green', txtMsg: '입력하세요.'}

    // 이벤트 핸들러
    onClick1(){
        alert('onClick1');
    }
    
    onClick2 = () => {
        alert('onClick2');
    }  

    onToggle = () => {
        if(this.state.fColor === '#F00'){
            this.setState({fColor:'#00F'});
        }else{
            this.setState({fColor:'#F00'});
        }
    }

    onLinkClick = (e) => {
        e.preventDefault();
        alert('onLinkClick');
    } 

    render() {

        return (
            <div className='MyComponent1'>
                <h4>MyComponent1 Event</h4>
                {/* click 이벤트 */}
                <h1 style={{color: this.state.fColor}}>Click!!!</h1>
                <button onClick={() => {alert('클릭1')}}>클릭1</button>
                <button onClick={this.onClick1}>클릭2</button>
                <button onClick={this.onClick2}>클릭3</button>                
                <button onClick={() => {this.setState({fColor: '#F00'})}}>클릭4</button>
                <button onClick={this.onToggle}>클릭5</button>
                <a href='http://naver.com' onClick={this.onLinkClick}>클릭6</a>

                {/* mouse 이벤트 */}
                <h1 style={{backgroundColor: this.state.bColor}}
                    onMouseOver={()=>{this.setState({bColor:'orange'})}}
                    onMouseOut ={()=>{this.setState({bColor:'orchid'})}}>Mouse 이벤트</h1>
                
                {/* change 이벤트 */}
                <h1>{this.state.txtMsg}</h1>
                <input type="text" value={this.state.txtMsg} onChange={(e)=>{
                    this.setState({txtMsg: e.target.value})
                }}/>
               
            </div>
        );
    }
}

export default MyComponent1;