import React, { useRef, useState } from 'react';

const MyComponent3 = ({children}) => {
    //state 선언
    const [list, setList] = useState([]);

    //ref 선언
    const inputRef = useRef();
        
    //handler 정의
    const onClickHandler = () => {                
        let values = list.concat(inputRef.current.value);
        console.log(values);
        setList(values);
    }

    return (
        <div className='MyComponent3'>
            <h5>MyComponent3</h5>
            <p>제목 : {children}</p>
            <ul>
                {list.map((value=><li>{value}</li>))}
            </ul>
            <input type="text" ref={inputRef}/>
            <button onClick={onClickHandler}>등록</button>

        </div>
    );
};

export default MyComponent3;