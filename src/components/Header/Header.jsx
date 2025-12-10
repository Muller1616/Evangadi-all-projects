import React, { useState } from 'react';
import './header.css';
import netLogo from '../../assets/images/netflixlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className='header_outer_container'>
            <div className="header_container">
                <div className="header_left">
                    <ul className={isOpen ? 'nav_active' : ''}>
                        <li><img src={netLogo} alt="Netflix Logo" width='100' /></li>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>

                <div className="header_right">
                    <ul className={isOpen ? 'nav_active' : ''}>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>

                    {/* Hamburger icon */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
