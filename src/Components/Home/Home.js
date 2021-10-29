import React from "react";
import './Home.css'

export default function Home() {
    return (
        <main className="home-bg">
            <div className="layer"></div>
            <div className="home-container">
                <h2>Bienvenidos a WikiPaises</h2>
                <p>
                    En esta aplicacion podes ver los paises segun el continente, su bandera
                    y otros datos relevantes. Fue construida con react, usando tecnologias
                    como <strong>react-router</strong>, <strong>hooks</strong>, peticiones mediante <strong>async await</strong> , entre otras.
                </p>
            </div>
        </main>
    );
}
