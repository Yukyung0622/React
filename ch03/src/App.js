import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import MyFuncComponent from './components/MyFuncComponent';
import ComponentParent from './components/ComponentParent';
import PropsComponent1 from './components/PropsComponent1';
import PropsComponent2 from './components/PropsComponent2';
import StateComponent1 from './components/StateComponent1';
import StateComponent2 from './components/StateComponent2';
import RefComponent1 from './components/RefComponent1';
import Refcomponent2 from './components/Refcomponent2';
import LifeCycleComponent from './components/LifeCycleComponent';

/*
  날짜 : 2022/05/10
  이름 : 김유경
  내용 : React 컴포넌트 실습하기

  컴포넌트(Component)
   - UI 또는 기능을 독립적으로 나뉜 모듈형태
   - 컴포넌트는 클래스형과 함수형으로 나뉨
*/
function App() {
  return (
    <div>
      <h3>ch03.React 컴포넌트 실습</h3>

      <h4>클래스형 컴포넌트</h4>
      <MyClassComponent/>

      <h4>함수형 컴포넌트</h4>
      <MyFuncComponent/>

    <h4>부모, 자식 컴포넌트</h4> 
      <ComponentParent/>

      <h4>컴포넌트 props 실습</h4>
      <PropsComponent1 tit="props 실습1" msg="속성을 갖는 클래스형 컴포넌트 실습"/>
      <PropsComponent2 tit="props 실습2" msg="속성을 갖는 함수형 컴포넌트 실습"/>

      <h4>컴포넌트 state 실습</h4>
      <StateComponent1/>
      <StateComponent2/>

      <h4>컴포넌트 ref 실습</h4>
      <RefComponent1/>
      <Refcomponent2/>

      <h4>컴포넌트 생명주기</h4>
      <LifeCycleComponent/>

    </div>
  );
}

export default App;