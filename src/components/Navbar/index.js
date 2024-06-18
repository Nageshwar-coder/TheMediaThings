import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
    
    return (
        <nav className='navbar'>
            <Link to="/" className='logoLink'>
                <img src="/logo1.png" alt="MediaThingsLogo" className="logo" />
            </Link>
            <ul className={`linksList ${dropdownVisible ? 'show' : ''}`}>
                <li>
                    <Link to="/" className='links' onClick={() => setDropdownVisible(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='links' onClick={() => setDropdownVisible(false)}>About</Link>
                </li>
                <li>
                    <Link to="/services" className='links' onClick={() => setDropdownVisible(false)}>Services</Link>
                </li>
                <li>
                    <Link to="/contactUs" className='links' onClick={() => setDropdownVisible(false)}>Contact Us</Link>
                </li>
            </ul>
            <button type='button' className='button1' onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path d="M3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;