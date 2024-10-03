import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
function App() {
  return (
   
      <div className="App">
       <Cart />
      </div>
    
    
  );
}

export default App;
