import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks =['razzak','Alamgir','Jasim','Faruk','jafar','omarsani'];
  const products=[
    {name:'photoshop',price:'$90.99'},
    {name:'Illustrate',price:'60.99'},
    {name:'PDF Reader',price:'$6.99'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am a react person
        </p>
          <ul>
              {
                nayoks.map(nayok=><li>{nayok}</li>)
             }
             {
               products.map(product=><li>{product.name}</li>)
             }
          </ul>
             {
               products.map(product=><Product product={product}></Product>)
             }
        
        <Person name='Rubel Nayok' nayika='Mousumi'></Person>
        <Person name='Jasim' nayika='Shabana'></Person>
        <Person name='Bapparaz'nayika='Cheka'></Person>
        <Person name='Elias' nayika='Bobita'></Person>
      
      </header>
    </div>
  );
}

function Product(props){

  const {name,price} = props.product;

  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'300px',
    float:'left'
  }

  return(
    <div style={productStyle}>
      <h1>{name}</h1>
      <h1>{price}</h1>
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
    <h1>Nayika:{props.nayika}</h1>
  </div>
  )
}

export default App;
