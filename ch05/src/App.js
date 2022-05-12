import logo from './logo.svg';
import './App.css';
import MyComponent1 from './components/MyComponent1';
import MyComponent2 from './components/MyComponent2';
import MyComponent3 from './components/MyComponent3';

/*
  날짜 : 2022/05/12
  이름 : 김유경
  내용 : ch05. React Hooks 실습하기

  React Hooks
    - 함수형 컴포넌트에서 기능확장을 위해 제공하는 리액트 기능 함수
    - 함수이름이 use~ 로 시작, 래퍼런스 참고(https://reactjs.org/docs/hooks-reference.html)
*/

function App() {
  return (
    <div className="App">
      <h3>ch05. React Hooks 실습</h3>

      <h4>1) useState</h4>
      <MyComponent1/>

      <h4>2) useEffect</h4>
      <MyComponent2/>

      <h4>3) useRef</h4>
      <MyComponent3>useRef 실습</MyComponent3>

    </div>
  );
}

export default App;
