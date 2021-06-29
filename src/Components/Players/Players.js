import React, { useEffect, useState } from 'react';
import css from './Players.css'
import data from '../../fakeData/data.json'
import PlayerCard from '../Player Card/PlayerCard';
import Booking from '../Booking/Booking';
import 'bootstrap/dist/css/bootstrap.css';

const Players = () => {
    const [player,setPlayer] = useState([]);
    const [booking,setBooking] = useState([]);
    const handleButton = (player) =>{
            // console.log(player);
            const newBooked = [...booking,player];
            setBooking(newBooked);
            console.log(newBooked);

    }
    useEffect(()=>{
        setPlayer(data);
    },[]);
    return (
        <div className='players'>
            <div className="playerSection">
                {
                    player.map(player =>
                        <PlayerCard
                        player ={player}
                        handleButton ={handleButton}
                        ></PlayerCard>
                        )
                }

            </div>
            <div className="bookingSection">
                <Booking booking ={booking}></Booking>

            </div>
        </div>
    );
};

export default Players;