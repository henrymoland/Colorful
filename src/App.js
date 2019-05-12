import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';


function App() {
  return (
    <div className="App">
      <Palette palette {...seedColors[2]}/>
    </div>
  );
}

export default App;
