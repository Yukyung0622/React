import React, { useState } from 'react';

const StateComponent2 = () => {

    //state 선언
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(2);

    return (
        <div className='StateComponent2'>
                <h5>StateComponent2</h5>
                <p>
                    상태값1 : {num1}<br/>                    
                </p>
                <button onClick={()=>{setNum1(num1 + 1)}}>+</button>
                <button onClick={()=>{setNum1(num1 - 1)}}>-</button>
                <p>
                    상태값2 : {num2}<br/>                    
                </p>
                <button onClick={()=>{setNum2(num2 + 1)}}>+</button>
                <button onClick={()=>{setNum2(num2 - 1)}}>-</button>
            </div>
    );
};

export default StateComponent2;