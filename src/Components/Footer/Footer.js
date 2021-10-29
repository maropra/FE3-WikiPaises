import React from "react";
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <span>Ⓒ2021 - Mar Opradolce</span>
                <div className="redes">
                    <i class="fab fa-github"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fas fa-coffee"></i>
                </div>
            </div>
        </footer>
    );
}