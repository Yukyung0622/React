import logo from './logo.svg';
import './App.css';
import MyComponent1 from './components/MyComponent1';
import MyComponent2 from './components/MyComponent2';
/*
  날짜 : 2022/05/11
  이름 : 김유경
  내용 : ch04. 리액트 이벤트

  이벤트
    - 리액트 JSX에서 이벤트 속성은 카멜표기(onclick -> onClick)
    - 리액트 이벤트 핸들러는 일반적으로 화살표 함수로 정의
*/

function App() {
  return (
    <div>
      <h3>ch04.리액트 이벤트</h3>

      <h4>클래스형 컴포넌트 이벤트</h4>
      <MyComponent1 />

      <h4>함수형 컴포넌트 이벤트</h4>
      <MyComponent2 />

    </div>
  );
}

export default App;
