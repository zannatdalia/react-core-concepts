import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const products = [{name: "Computer Monitor", price: 20000}, {name: "Computer Keyboard", price: 2000}]
  return (
    <div className="App">
      <header className="App-header">
          <Users></Users>
          <Counter></Counter>
          <ul>
              {
                  products.map(product => <li>{product.name}</li>)
              }
          </ul>
        <p>Welcome to react World.</p>
          {
              products.map(pd => <Products product = {pd}></Products>)
          }
      </header>
    </div>
  );
}

function Counter(){
    const [count, setCount] = useState(10)
    return(
        <div>
            <h1>Counter: {count} </h1>
            <button onClick={() => setCount(count+1)}>increase</button>
            <button onClick={() => setCount(count-1)}>decrease</button>
        </div>
    )
}
function Users() {
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(data => setUser(data))
    })
    return(
        <div>
            <h1>Dynamic users: {users.length} </h1>
            <ul>
                {
                    users.map(user => <li>{user.name}</li>)
                }
            </ul>
        </div>
    )
}

function Products(props){
    const productStyle = {
        border:"1px solid gray",
        borderRadius: "5px",
        backgroundColor: 'lightGray',
        height: "300px",
        width: "300px",
        float: "left"
    }
    const {name, price} = props.product;
    return (
        <div style={productStyle}>
            <h4>{name}</h4>
            <h6>{price}</h6>
            <button>Buy now</button>
        </div>
    )
}

export default App;
