import React from 'react';
class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            item: 'Mobile Phone',
            price: 999,
            qty: 1,
            img: ''
        }
        // either this binding here in constructor or we can use arrow functions for default binding
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('this', this.state);
    }
    render(){
        const{ item, price, qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
        <div style={ {fontSize: 25} }>{item}</div>
        <div style={ {color: '#777'} }>rs {price}</div>
        <div style={ {color: 'cyan'} }>Qty {qty}</div>
                    <div className="cart-item-actions">
                        {/* actions */}
                        <img alt="increse" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828817.svg" onClick={this.increaseQuantity }></img>
                        <img alt="decrese" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992514.svg"></img>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1345/1345874.svg"></img>
                    </div>
                </div>
            </div>
        );
    }
}
const styles={
    image: {
        height: 110,
        width: 110,
        borderRadius:10,
        backgroundColor: '#ccc'
    }
}
export default CartItem;