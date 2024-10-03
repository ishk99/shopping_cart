import React, { useState, useContext } from "react";
import './ShowProducts.css';
import CartContext from "../context/CartContext";
const ShowProducts = ({prod}) =>{
    console.log('Inside Show Products');
    
    const {cartItems,setCartItems, addToCart, removeFromCart} = useContext(CartContext);
    const [cart , setCart ] = useState([]);
    console.log('Items in cart context',cartItems);  

    return(
        <div className="product-container">
           <h3>{prod.title}</h3>
           <img src={prod.image} />
           <h4>{prod.price}</h4>
           <button className="add-to-cart" onClick={() => addToCart(prod)}>Add To Cart</button>
           <button className="remove-from-cart" onClick={() => removeFromCart(prod.id)}>Remove From Cart</button>
        
        </div>
    )
}
export default ShowProducts;