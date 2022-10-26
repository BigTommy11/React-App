import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <label>背面カメラ使用</label>
          <br />
          <input type='file' id='environment' capture="environment" accept='video/*' />
          <br />
          <br />
          <br />
          <label>前面カメラ使用</label>
          <br />
          <input type='file' id='user' capture="user" accept='image/*' />
        </div>


      </header>
    </div>
  );
}

export default App;
