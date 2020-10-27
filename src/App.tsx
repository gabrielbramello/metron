import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Metronomo from './components/Metronomo';

function App() {
  return (
    <div className="App">
      <Header title="Metronomo"/>
      <Metronomo tempo={1000}></Metronomo>
    </div>
  );
}

export default App;
