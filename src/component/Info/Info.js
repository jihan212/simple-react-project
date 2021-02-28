import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Info = (props) => {
    const {name,image,salary} = props.information;
    return (
        <div className="player">
               <div className="player-image">
                <img src={image} alt=""/>
            </div>
            <div>
                <h4>Player Name: {name}</h4>
                <h3>Salary: ${salary}</h3>
                <button onClick={()=> props.handleBuyPlayer(props.information)} className="Button"><FontAwesomeIcon icon={faFutbol} /> Buy</button>
            </div>
        </div>
    );
};

export default Info;