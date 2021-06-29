import React from 'react';
import css from './Header.css'

const Header = () => {
    return (
        <div>
            <div>
            <div className='header'>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/players">Players</a>
                    <a href="/review">Review</a>
                    <a href="/contact">Contact Us</a>
                </nav>
            </div>
        </div>
            
        </div>
    );
};

export default Header;