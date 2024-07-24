import React, { useState } from 'react';
import '../components/Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className={`topnav${isOpen ? ' responsive' : ''}`} id="myTopnav">
                <h1 className="mylogo kanit-bold"><samp id="spam1">DEV</samp> <samp id="spam2">ARTUR</samp></h1> 
                <a href="/">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
                <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </a>
            </div>
        </header>
    );
};

export default Navbar;