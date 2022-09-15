import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [benutzerkennung, setBenutzerkennung] = useState("");

  return (
    <div className="App">
      <div className="login-box">
        <div>
          <h3>Login</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
