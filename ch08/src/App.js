import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes} from 'react-router-dom'
import AxiosTest1 from './components/AxiosTest1';
import AxiosTest2 from './components/AxiosTest2';

function App() {
  return (
    <div className="App">
      <h3>ch08.React 비동기 통신</h3>
      <p>
        <Link to="/axios1">React 기본 Ajax통신</Link>/
        <Link to="/axios2">React 고급 Ajax통신</Link>
      </p>
      <Routes>
        <Route path="/axios1" element={<AxiosTest1/>}/>
        <Route path="/axios2" element={<AxiosTest2/>}/>

      </Routes>
    </div>
  );
}

export default App;