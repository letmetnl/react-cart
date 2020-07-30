import React from 'react';
// import './index.css';
import CartItem from './CartItem';
const Cart = (props) => {
    const {products}= props;
    return (
        <div className="cart">
            {/* {arr.map((item) => {
                  return item+5          list rendering
               }) } */}
            <h1>Cart</h1>
            {products.map((product) => {
                return (
                 <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}                        onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                 />
                )
            }) }
        </div>
    ); 
}

export default Cart;