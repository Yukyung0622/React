import React, { useEffect, useState } from 'react';

const MyComponent2 = () => {

    const[name, setName] = useState('홍길동');
    const[age, setAge] = useState(20);

    //useEffect(Mount, 리렌더링)
    useEffect(()=>{
        console.log('Mount...');
    }, []);

    //useEffect(Mount)
    useEffect(()=>{
        console.log('Mount and Rerendering...');
    });

    //useEffect(상태값 name이 업데이트)
    useEffect(()=>{
        console.log('state name update....');
    }, [name]);

    //useEffect(상태값 age이 업데이트)
    useEffect(()=>{
        console.log('state age update...');
    }, [age]);

    //useEffect(Unmount)
    useEffect(()=>{
        console.log('unmount...');
        return ()=>{};
    });



    return (
        <div className='MyComponent2'>
            <h5>MyComponent2 실습</h5>
            <p>
                useState Hook 실습<br/>
                이름 : {name} <br/>
                나이 : {age} <br/>
            </p>
            
            
            <input type="text" 
                   value={name} 
                   onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
            
        </div>
    );
};

export default MyComponent2;