import React, { useState } from 'react';
import Filmitem from './components/filmitem/filmitem';
import logo from './logo.svg';
import './App.css';

function App() {
  const [benutzerkennung, setBenutzerkennung] = useState("");

  return (
    <div className="App">
      <div className="login-box">
          <h3>Recommendersystem</h3>
          <div className='such-container'>
            <input />
          </div>
          <div className='wrapper'>
            <div className="divider"></div>
          </div>
          <Filmitem title="Fight Club" beschreibung='Dies ist eine Testbeschreibung' releaseJahr="2012" imgPath='/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'/>
      </div>
    </div>
  );
}

export default App;
