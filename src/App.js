import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products=[{name:'photoshop',price:'$90.99'}];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am a react person
        </p>
        <Product name={products[0].name}></Product>
        
        <Person name='Rubel Nayok' nayika='Mousumi'></Person>
        <Person name='Jasim' nayika='Shabana'></Person>
        <Person name='Bapparaz'nayika='Cheka'></Person>
        <Person name='Elias' nayika='Bobita'></Person>
      
      </header>
    </div>
  );
}

function Product(props){

  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }

  return(
    <div style={productStyle}>
      <h1>{props.name}</h1>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'4px solid cyan',
    margin:'10px'
}
  return (
  <div style={{personStyle}}>
    <h1>Nayok:{props.name}</h1>
  
  </div>
  )
}

export default App;
