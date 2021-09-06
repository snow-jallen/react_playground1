import React from 'react'
import './App.css'
import {Greeter} from './components/Greeter'
import {Family} from './components/Family'
import {children} from './children'


function App() {
  return (
    <div className="App">
        <Greeter />
      <Family children={children} />
    </div>
  );
}

export default App;
