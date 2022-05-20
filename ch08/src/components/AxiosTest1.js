import React, { useState } from 'react';
import axios from 'axios';

const AxiosTest1 = () => {

    //state 선언
    const [todo, setTodo] = useState(null); // 객체 초기값 null
    const [todos, setTodos] = useState([]); // list 객체 초기값 []

    const onClickHandler1 = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function(resp){
            //console.log(resp.data);
            setTodo(resp.data)
        });

    }
    const onClickHandler2 = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(function(resp){
            //console.log(resp.data)
            setTodos(resp.data)
        })
    }

    return (
        <div className='AxiosTest1'>
            <h4>React 기본 Ajax통신</h4>

            <button onClick={onClickHandler1}>데이터 요청1</button>
            <p>
                userid : {todo && todo.userId}<br/>
                id : {todo && todo.id}<br/>
                title : {todo && todo.title}<br/>
                completed : {todo && todo.completed.toString()}<br/>
            </p>

            <button onClick={onClickHandler2}>데이터 요청2</button>
            <table border='1'>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>

                {todos.map(todo => 
                    <tr>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed.toString()}</td>
                    </tr>    
                )}
                
            </table>
        </div>
    );
};

export default AxiosTest1;