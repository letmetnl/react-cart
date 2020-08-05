import React from 'react';
// class CartItem extends React.Component{
    // render(){
    // testing () {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         // setState acts like a synchronous call
    //         this.setState({ qty: this.state.qty+10 });
    //         this.setState({ qty: this.state.qty+10 });
    //         this.setState({ qty: this.state.qty+10 });

    //         console.log('state', this.state);
    //     });
    // }
// handling increase and decrease in quantity via state
    // increaseQuantity = () => {
    //     // console.log('this', this.state);
    //     // setState form-1
    //     // this.setState({
    //     //     qty: this.state.qty+1
    //     // });

    //     // setstate form-2 using previous state
    //     this.setState((prevState) => {
    //         return {qty: this.state.qty + 1}
    //     // },() => {
    //     //     console.log('this.state', this.state);
    //     });
    // }

    // decreaseQuantity = () => {
    //     // check for if qty is 0
    //     const{qty} = this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {qty: this.state.qty - 1}
    //     });
    // }

    const CartItem = (props) => {
    
        // console.log('this.props', props);
        const{ item, price, qty}=props.product;
        const{ product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct }= props;
        return(
            <div className="cart-item">
                {props.jsx}
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{item}</div>
                    <div style={ {color: '#777'} }>rs {price}</div>
                    <div style={ {color: 'cyan'} }>Qty {qty}</div>
                    <div className="cart-item-actions">
                        {/* action buttons */}
                        <img alt="increse" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828817.svg" 
                        onClick={() => onIncreaseQuantity(product) }></img>
                        <img alt="decrese" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992514.svg" 
                        onClick={() => onDecreaseQuantity(product) }></img>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1345/1345874.svg"
                        onClick={() => onDeleteProduct(product.id)}></img>
                    </div>
                </div>
            </div>
        );
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