import React, { useRef } from 'react';

const Refcomponent2 = () => {

    //ref선언
    const refUid = useRef();
    const refName = useRef();

    //핸들러(이벤트 실행함수)
    const bnt1Click = () => {
        this.refUid.current.focus();
    }

    const bnt2Click = () => {
        this.refUid.current.focus();
    }


    return (
        <div className='RefComponent2'>
            <h5>RefComponent1 실습</h5>

             <input type='text' name='uid' ref={refUid}/>
             <input type='text' name='name' ref={refName}/>

            <button onClick={bnt1Click}>포커스 입력</button>
            <button onClick={bnt2Click}>포커스 입력</button>
        </div>
    );
};

export default Refcomponent2;