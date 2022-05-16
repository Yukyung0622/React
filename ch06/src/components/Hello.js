import React from 'react';

const Hello = () => {

    const myStyle = {
        backgroundColor:'orange'
    };

    return (
        <div className='Hello' style={myStyle}>
            <h4>Hello</h4>
            <p>
                Hello 컴포넌트 입니다.
            </p>
            
        </div>
    );
};

export default Hello;