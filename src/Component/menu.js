import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from "../assets/menu.svg";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="menu-container">
            <button className="menu-button mobile-only" onClick={handleToggle}>
                <img className='menu' src={menu} alt='Menu Icon'></img>
            </button>
            {showMenu && (
                <nav className="list mobile-only">
                    <Link className='lists' to="/" onClick={() => setShowMenu(false)}>Home</Link>
                    <Link className='lists' to="/Portfolio" onClick={() => setShowMenu(false)}>Portfolio</Link>
                    <Link className='lists' to="/Services" onClick={() => setShowMenu(false)}>Services</Link>
                    <Link className='lists' to="/Contact" onClick={() => setShowMenu(false)}>Contact</Link>
                </nav>
            )}
            <nav className="desktop-only">
                <Link className='lists' to="/">Home</Link>
                <Link className='lists' to="/Portfolio">Portfolio</Link>
                <Link className='lists' to="/Services">Services</Link>
                <Link className='lists' to="/Contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Menu;

