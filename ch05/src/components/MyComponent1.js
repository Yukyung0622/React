import React, { useState } from 'react';

const MyComponent1 = () => {

    //state 선언
    const[person, setPerson] = useState({name:'홍길동', age:20});


    return (
        <div className='MyComponent1'>
            <h5>MyComponent1</h5>
            <p>
                useState Hook 실습<br/>
                이름 : {person.name} <br/>
                나이 : {person.age} <br/>
            </p>
            
            {/* 
                - 전개연산자(...)를 이용해서 기존의 상태값을 유지한다.
                - 전개연산자(...)를 사용하지 않기 위해 state name과 age를 따로 선언한다.
                    const[name, setName] = useState('홍길동');
                    const[age, setAge] = useState(20);
            */}
            
            <input type="text" 
                   value={person.name} 
                   onChange={(e)=>{setPerson({...person, name: e.target.value})}}/>
            <input type="text" value={person.age} onChange={(e)=>{setPerson({...person, age: e.target.value})}}/>
        </div>
    );
};

export default MyComponent1;