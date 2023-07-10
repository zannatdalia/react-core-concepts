import logo from './logo.svg';
import './App.css';

function App() {
    const products = [{name: "Computer Monitor", price: 20000}, {name: "Computer Keyboard", price: 2000}]
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to react World.</p>
          {
              products.map(pd => <Products product = {pd}></Products>)
          }
      </header>
    </div>
  );
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
