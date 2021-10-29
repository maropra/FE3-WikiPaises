import { Link } from "react-router-3";
import Desplegable from "../Desplegable/Desplegable";
import './Header.css'
import React, { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDesplegable = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }
    }

    return (
        <header>
            <div className="header-container">
                <h1><Link to="/">Paises</Link></h1>
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/Africa">Africa</Link>
                        <Link to="/America">America</Link>
                        <Link to="/Europa">Europa</Link>
                        <Link to="/Oceania">Oceania</Link>
                    </ul>
                </nav>
                <button onClick={handleDesplegable} className="menu"><i className="fas fa-bars" /></button>
            </div>
            <Desplegable isMenuOpen={isMenuOpen} handleDesplegable={handleDesplegable} />
        </header>
    );
}