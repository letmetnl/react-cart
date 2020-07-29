import React from 'react';
// import './index.css';
import CartItem from './CartItem';
class Cart extends React.Component{
    render() {
        const arr=[1,2,3,4,5];
        return (
            
            <div className="cart">
                {arr.map((item) => {
                    return item+5
                }) }
                <h1>Cart</h1>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        ); 
    }
}

export default Cart;