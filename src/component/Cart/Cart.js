import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(props);
    return (
        <div>
            <h1>Player added:{cart.length}</h1>
        </div>
    );
};

export default Cart;