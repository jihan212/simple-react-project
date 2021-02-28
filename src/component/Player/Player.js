import React, { useState } from 'react';
import fakeData from '../../fakeData/data.json'
import './Player.css'

const Player = () => {
    console.log(fakeData);
    const [players, setPlayers] = useState(fakeData);
    return (
        <div className="player">
            <div className="player-container">
            <h1>This is player</h1>
            <h3>Player Number:{players.length}</h3>
            <ul>
                {
                    players.map (player => <li>{player.name}</li>)
                }
            </ul>
            </div>
            
            <div className="cart-container">
                <h4>This Is Cart</h4>
            </div>
        </div>
    );
};

export default Player;