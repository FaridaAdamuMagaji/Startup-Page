import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from "../assets/menu.svg";
const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="menu-container">
            <button className="menu-button" onClick={handleClick}><img src={menu} alt=' '></img>
            </button>
                <nav className="list">
                    <Link className='lists' to="/Home">Home</Link>
                    <Link className='lists' to="/Portfolio">Portfolio</Link>
                </nav>
        </div>
    );
}

export default Menu;
