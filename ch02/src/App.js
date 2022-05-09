import logo from './logo.svg';
import './App.css';

/*
  날짜 : 2022/05/09
  이름 : 김유경
  내용 : ch02.React JSX 실습하기

  JSX(Javascript XML)
   - 리액트 컴포넌트에서 브라우저에 출력(렌더링)하기 위해 사용하는 XML 문법
   - HTML과 흡사하지만 몇가지 규칙이 다름
*/

function App() {
  
  // 상수
  const TITLE = 'Hello React!';
  const NAME  = null;
  const STYLE = {
    fontSize: '24px',
    color: 'orange',
    backgroundColor: 'yellow'
  };

  // 변수
  let num1 = 1;
  let num2 = 2;

  // 배열
  const names = ['김유신', '김춘추', '장보고', '강감찬', '이순신'];
  const actor = ['강수연', '정우성', '송강호', '강동원', '이정재'];

  return (
    <div>
      <h3>ch02.React JSX 실습</h3>

      <h4>변수 출력</h4>
      <p>
        TITLE : {TITLE}<br/>
        NAME : {NAME}<br/>
      </p>

      <h4>조건부 연산자</h4>
      <p>
        {(num1 > num2) ?
         (<span>num1은 num2보다 크다.</span>) : 
         (<span>num1은 num2보다 작다.</span>)}
      </p>
      <p>
        {(NAME === null) && (<span>NAME은 null 입니다.</span>)}
      </p>

      <p>
        {NAME || <span>NAME은 null 입니다.</span>}
      </p>

      <h4>반복 연산자</h4>
      <ul>
        {names.map(name => <li>{name}</li>)}
      </ul>
      <ol>
        {actor.map(data => <li>{data}</li>)}          
      </ol>

      <h4>JSX 인라인 스타일</h4>
      <p>
        저는 <span style={STYLE}>김유신</span>입니다.
      </p>
      <p>
        저는 <span className="App-myStyle">김춘추</span>입니다.
      </p>

      <h4>JSX 주석</h4>
      {/*<p>JSX 주석입니다.</p>*/}
            
    </div>
  );
}

export default App;