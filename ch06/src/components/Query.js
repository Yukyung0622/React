import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Query = () => {

    //Query Params를 수신하기 위한 Hook 선언
    const[searchParams] = useSearchParams();

    const name = searchParams.get('name');
    const age = searchParams.get('age');
    const addr = searchParams.get('addr');

    return (
        <div className='Query'>
            <h4>Query String</h4>

            <p>
                이름 : {name}<br/>
                나이 : {age}<br/>
                주소 : {addr}<br/>
            </p>

        </div>
    );
};

export default Query;