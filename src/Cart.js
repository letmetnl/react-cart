import React from 'react';
// import './index.css';
import CartItem from './CartItem';
class Cart extends React.Component{
    render() {
        return (
            
            <div className="cart">
                <h1>Cart</h1>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        ); 
    }
}

export default Cart;