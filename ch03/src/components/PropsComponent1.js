import React, { Component } from 'react';

//rcc 자동 완성
class PropsComponent1 extends Component {
    render() {
        // 부모 컴포넌트로 부터 전달된 속성값(tit, msg) 
        const tit = this.props.tit;
        const msg = this.props.msg;

        return (
            <div className='PropsComponent1'>
                <h5>PropsComponent1 클래스형</h5>
                <p>
                    tit 속성 : {tit}<br/>
                    msg 속성 : {msg}<br/>
                </p>
            </div>
        );
    }
}

export default PropsComponent1;