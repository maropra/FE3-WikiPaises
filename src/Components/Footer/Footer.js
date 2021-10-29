import React from "react";
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <span>Ⓒ2021 - Mar Opradolce</span>
                <div className="redes">
                    <a href="https://github.com/maropra" target="_blank"><i class="fab fa-github" /></a>
                    <a href="https://www.linkedin.com/in/mar-opradolce-213456184/" target="_blank"><i class="fab fa-linkedin-in" /></a>
                    <a href="https://www.instagram.com/maropradolce/" target="_blank"><i class="fab fa-instagram" /></a>
                    <a href="https://maropra.github.io/" target="_blank"><i class="fas fa-coffee" /></a>
                </div>
            </div>
        </footer>
    );
}