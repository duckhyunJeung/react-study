import React from 'react'; // 리액트를 사용하려면 반드시 선언해야합니다.
import logo from './logo.svg';
import './App.css';

// 리액트 사용시 주의점.
// 모든 태그는 반드시  /> 닫혀있어야합니다. 안닫히면 에러 나요~


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
