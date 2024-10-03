import React, { useEffect, useState, useContext } from 'react';
import ShowProducts from './ShowProducts';
import CartContext from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const [userName, setUserName] = useState();
    const [productDetails, setProductDetails] = useState([]);
    const [showProd, setShowProd] = useState(false);
    const {cartItems,setCartItems} = useContext(CartContext);

    const calculateBill = () => {
        // let total = 0;
        const calc = cartItems.reduce((acc, curr) => curr.price + acc, 0);
        return calc.toFixed(2);
    }
    async function fetchName() {
        //will fetch name of user from api
        const data = await fetch('https://dummyjson.com/users');
        const json = await data.json();
        // console.log(json.users[0]);
        const name = json ? json.users[0].firstName : 'No user';
        console.log(name);
        setUserName(name);
        // const name = json ? json[0].firstName : 'No User';
        
    }
    async function fetchProducts(){
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();
        
        const products = json.products.map((prod) => ({
            id: prod.id,
            title: prod.title,
            image: prod.images[0],
            price: prod.price
        }));
        console.log(products);
         setProductDetails(products);      
    }
  
    useEffect(() => {
        fetchName();
        fetchProducts();
    },[])
    return(
        <div className=''>
            <div className='details-container'>
                <p>Hi, {userName}</p>
                <p>Please click button to see products <button onClick={() => setShowProd(!showProd)}>{!showProd ? 'Show' : 'Hide'} Products</button></p>
                <p>Total items in cart {cartItems.length}</p>
                <p>Total Bill: {calculateBill()}</p>
            </div>
            {showProd ? <>
                <div className='product-display'>
                    {/* <p>Nothing displaying as of yet</p> */}
                    {productDetails.map((p) => {
                        return(
                            <ShowProducts prod={p} key={p.id}/>
                        )
                    })}
                </div>
            </> : 'No Products yet'}
        </div>
    )
}

export default Cart;