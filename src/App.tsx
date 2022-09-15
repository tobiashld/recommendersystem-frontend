import React, { useState } from 'react';
import Filmitem from './components/filmitem/filmitem';
import logo from './logo.svg';
import './App.css';

function App() {
  const [benutzerkennung, setBenutzerkennung] = useState("");

  const testbeschreibung = "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion. asdflaksfö asd fa f af asd fasdfasdf asdf asdf asdf a sfasd fasdf"

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
          <Filmitem title="Fight Club" beschreibung={testbeschreibung} releaseJahr="2012" imgPath='/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'/>
      </div>
    </div>
  );
}

export default App;
