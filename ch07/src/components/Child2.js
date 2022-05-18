import React from 'react';
import { useDispatch } from 'react-redux';

const Child2 = () => {

    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch({type:'increment'})
    }
    const onDecrement = () => {
        dispatch({type:'decrement'})
    }

    return (
        <div className='Child2'>
            <h3>Child2</h3>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
        </div>
    );
};

export default Child2;