import axios from 'axios';
import React, { useState } from 'react';

const AxiosTest2 = () => {
    
    // state 선언
    const [uid, setUid]   = useState('');
    const [name, setName] = useState('');
    const [hp, setHp]     = useState('');
    const [age, setAge]   = useState(0);

    // 핸들러
    const onClickHandler = () => {
        
        const jsonData = {
            "uid"  : uid,
            "name" : name,
            "hp"   : hp,
            "age"  : age
        };

        console.log(jsonData);

        axios.post('http://localhost:8080/user', null, {params: jsonData}).then(function(resp){
            console.log(resp.data);
        });


    }
    
    return (
        <div className='AxiosTest2'>
            <h4>React 고급 Ajax통신</h4>

            <h4>등록</h4>
            <table border='1'>
                <tr>
                    <td>uid</td>
                    <td><input type='text' name='uid' value={uid} onChange={(e)=>{setUid(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>name</td>
                    <td><input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>hp</td>
                    <td><input type='text' name='hp' value={hp} onChange={(e)=>{setHp(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>age</td>
                    <td><input type='text' name='age' value={age} onChange={(e)=>{setAge(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td colSpan='2' align='right' ><input type='button' value='등록하기' onClick={onClickHandler}/></td>
                </tr>
            </table>

            <h4>목록</h4>
            <table border='1'>
                <tr>
                    <th>uid</th>
                    <th>name</th>
                    <th>hp</th>
                    <th>age</th>
                </tr>
                <tr>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                </tr>
            </table>

        </div>
    );
};

export default AxiosTest2;