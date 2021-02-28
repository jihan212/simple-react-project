import React from 'react';
import './Info.css';

const Info = (props) => {
    console.log(props.information);
    return (
        <div className="player-style">
            <div className="player-image">
                <img src={props.information.image} alt=""/>
            </div>
            <div className="player-info">
                <h4>Player Name: {props.information.name}</h4>
                <h3>Salary: {props.information.salary}</h3>
                <button>Buy</button>
            </div>
        </div>
    );
};

export default Info;