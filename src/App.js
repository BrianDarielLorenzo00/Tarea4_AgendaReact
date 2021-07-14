import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Agenda from './ContenedorPadre'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Titulo">Agenda React ITLA</p>
        <Agenda/>
        <div class="outer-footer">
            Copyright &copy; Brian Dariel Lorenzo.All Rights Reserved
        </div>
      </header>
    </div>
  );
}

export default App;
