import React from 'react';
import { useDispatch } from 'react-redux';
import Child2 from './Child2';

const Child1 = () => {

    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch({type:'increment'})
    }
    const onDecrement = () => {
        dispatch({type:'decrement'})
    }

    return (
        <div className='Child1'>
            <h3>Child1</h3>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>

            <Child2/>
        </div>
    );
};

export default Child1;