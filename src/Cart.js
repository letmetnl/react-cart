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
    handleIncreaseQuantity = (product) => {
        console.log('heyy, please increase tthe quantity of', product);
        const { products } = this.state;
        const index= products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products: products
        })
    }
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        if(product.qty===0){
            return;
        }
        const index= products.indexOf(product);
        products[index].qty -= 1;

        this.setState({
            products: products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id); //[{}]
        this.setState({
            products: items
        })
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
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteProduct={this.handleDeleteProduct}
                        />
                    )
                }) }
            </div>
        ); 
    }
}

export default Cart;