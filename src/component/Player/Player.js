import React, { useState } from 'react';
import fakeData from '../../fakeData/data.json'
import Cart from '../Cart/Cart';
import Info from '../Info/Info';
import './Player.css'

const Player = () => {
    const [players, setPlayers] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleBuyPlayer = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="player">
            <div className="player-container">
                {
                    players.map (player => <Info
                        handleBuyPlayer = {handleBuyPlayer}
                         information = {player} 
                         >
                         </Info>)
                }
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Player;