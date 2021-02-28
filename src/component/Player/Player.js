import React, { useState } from 'react';
import fakeData from '../../fakeData/data.json'
import Info from '../Info/Info';
import './Player.css'

const Player = () => {
    const [players, setPlayers] = useState(fakeData);
    return (
        <div className="player">
            <div className="player-container">
                {
                    players.map (player => <Info information = {player} ></Info>)
                }
            </div>
            
            <div className="cart-container">
                <h4>This Is Cart</h4>
            </div>
        </div>
    );
};

export default Player;