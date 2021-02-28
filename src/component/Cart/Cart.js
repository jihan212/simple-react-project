import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const cart = props.cart
    const totalCost = cart.reduce((sum,player)=> sum + player.salary, 0)
    return (
        <div className="cart">
            <div className="player-info">
            <h1>Player added for your club: {cart.length}</h1>
            { cart.map (player=><h3>Name: {player.name}</h3>) }
            { cart.map (player=><h3>Salary: {player.salary}</h3>) }
            </div>
            <br/>
            <div className="player-cost">
            <h2>Your Total Cost: ${totalCost}</h2>
            </div>
        </div>
    );
};

export default Cart;