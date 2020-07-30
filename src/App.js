import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [
            {
                item: 'Mobile Phone',
                price: 999,
                qty: 1,
                img: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80',
                id: 1
            },
            {
                item: 'Watch',
                price: 199,
                qty: 9,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                id: 2
            },{
                item: 'Laptop',
                price: 58999,
                qty: 1,
                img: 'https://images.unsplash.com/photo-1587613725874-d9a1e8e23f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=328&q=80',
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

getCartCount = () => {
  const { products } = this.state;
  let count=0;
  products.forEach((product) => {
    count += product.qty;
  })


  return count;
}

getTotalAmount = () => {
  const {products} = this.state;
  let totalamount=0;

  products.forEach((product) => {
    totalamount += product.qty*product.price;
  })
  return totalamount;
}

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
           products={products}
           onIncreaseQuantity={this.handleIncreaseQuantity}
           onDecreaseQuantity={this.handleDecreaseQuantity}
           onDeleteProduct={this.handleDeleteProduct}
        
        />

    <div style={{padding: 10, fontSize: 20}}>Total Amount: {this.getTotalAmount()}</div>

      </div>
    );
  }
  
}

export default App;
