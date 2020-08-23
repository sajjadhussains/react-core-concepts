import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am a react person
        </p>
        <Person name='Rubel Nayok' nayika='Mousumi'></Person>
        <Person name='Jasim' nayika='Shabana'></Person>
        <Person name='Bapparaz'nayika='Cheka'></Person>
        <Person name='Elias' nayika='Bobita'></Person>
      
      </header>
    </div>
  );
}

function Person(props){
  const personStyle={
    border:'4px solid cyan',
    margin:'10px'
}
  return (
  <div style={{personStyle}}>
    <h1>Nayok:{props.name}</h1>
  <h3>Nayika:{props.nayika}</h3>
  </div>
  )
}

export default App;
