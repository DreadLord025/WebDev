import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import MyThirdComponent from './MyThirdComponent';

function App() {
  return (
    <div className="App">
      <div className='contentClass'>
          <MyFirstComponent/>
          <MySecondComponent/>
          <MyThirdComponent/>
          </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    
  );
}

export default App;
