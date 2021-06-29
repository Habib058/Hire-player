import React from 'react';
import css from './Booking.css'
import 'bootstrap/dist/css/bootstrap.css';

const Booking = (props) => {
    const booked = props.booking;
    const totalSalary = booked.reduce((salary,player) =>salary+ parseInt(player.salary) ,0);
    return (
        <div className="booking">
            <h3>Total Added Player :{booked.length}</h3>
            <div className="playerAdded">
                <h5>Player Name</h5>
                <br />
                {
                    booked.map(player => 
                        <p> {player.name} : ${player.salary}</p>
                    )
                }
                <h4>Total Salary : ${totalSalary}</h4>

            </div>
            
        </div>
    );
};

export default Booking;