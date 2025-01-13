import React, {useState} from 'react';
import './App.css';
function App() {
  let a = "Vedant Singh";
  function changeName() {
    console.log('clicked!!')
    a = 'Ayush Singh';
    return a;
  }
  return (
    <div className='App'>
      <h1>Hello, {a}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
export default App;