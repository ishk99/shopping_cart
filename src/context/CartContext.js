import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    // why are we using a state variable here ?
    const [cartItems, setCartItems] = useState([]);
    //addToCart()
    // removeFromCart()

    const addToCart = (item) => {
        //set this item to the cart
        setCartItems((prev) => [...prev, item])
    }

    const removeFromCart = (id) => {
        const newCart = cartItems.filter((c) => c.id !== id);
        setCartItems(newCart);
    }
    return(
        <CartContext.Provider value={{cartItems,setCartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;