import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Child1 from './components/Child1';

/*
  날짜 : 2022/05/18
  이름 : 김유경
  내용 : Ch07.React Redux 실습하기

  Redux
    - 리액트에서 사용하는 전역 상태 관리 라이브러리
    - 전역 상태값은 리액트 모든 컴포넌트에서 공통으로 사용하는 상태값을 말한다.

  Redux 라이브러리 설치
    - npm install @reduxjs/toolkit
    - npm add redux-devtools-extension
*/

function App() {

  //리덕스 저장소 dispatch 생성
  const dispatch = useDispatch();

  //리덕스 저장소 state 가져오기
  const {value} = useSelector(state => state.value);
  const {count} = useSelector(state => state.count);

  //이벤트 핸들러
  const onIncrement = () => {
    dispatch({type:'increment'});
  }
  const onDecrement = () => {
    dispatch({type:'decrement'});
  }
  const onReset = () => {
    dispatch({type:'reset'});
  }
  const onCount = () => {
    dispatch({type:'push'});
  }

  return (
    <div className="App">
      <h3>ch07.React Redux 실습</h3>
      <p>
        value : {value}<br/>
        count : {count}<br/>
      </p>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
      <button onClick={onReset}>reset</button>
      <button onClick={onCount}>count</button>

      <Child1/>
    </div>
  );
}

export default App;
