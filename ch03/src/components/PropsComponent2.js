import React from 'react';

const PropsComponent2 = (props) => {

    //일반 할당방식
    //const tit = props.tit;
    //const msg = props.msg;

    //비구조화 할당방식
    const {tit, msg} = props;

    return (
        <div className='PropsComponent2'>
            <h5>PropsComponent2 함수형</h5>
            <p>
                tit 속성 : {tit}<br/>
                msg 속성 : {msg}<br/>
            </p>            
        </div>
    );
};

export default PropsComponent2;