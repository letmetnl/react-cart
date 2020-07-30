import React from 'react';
// import './index.css';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor () {
        super();
        this.state = {
            products: [
                {
                    item: 'Mobile Phone',
                    price: 999,
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    item: 'Watch',
                    price: 199,
                    qty: 9,
                    img: '',
                    id: 2
                },{
                    item: 'Laptop',
                    price: 58999,
                    qty: 1,
                    img: '',
                    id:3
                }
                
            ]
        }
        // either this binding here in constructor or we can use arrow functions for default binding
        // this.increaseQuantity=this.increaseQuantity.bind(this);

        // this.testing();
    }
    render() {
        const {products}= this.state;
        return (
            <div className="cart">
                {/* {arr.map((item) => {
                    return item+5          list rendering
                }) } */}
                <h1>Cart</h1>
                {products.map((product) => {
                    return <CartItem product={product} key={product.id}/>
                })}
            </div>
        ); 
    }
}

export default Cart;