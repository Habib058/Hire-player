import React from 'react';
import css from './PlayerCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

const PlayerCard = (props) => {
    const { img,name,country,salary,position,skill } = props.player
    return (
        <div className ='displayPlayer'>
            <div className="playerCard">
                <div className="img">
                    <img src={img} alt="players" />
                </div>
                <div className="playerDetails">
                    <h4>Name: {name}</h4>
                    <p>Country: {country}</p>
                    <p>Position:{position}</p>
                    <p>Skill:{skill}</p>
                    <h5>Salary: ${salary}</h5>
                    <button className="btn btn-success button" onClick={() =>props.handleButton(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;