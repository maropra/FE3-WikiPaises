import React, { useState } from "react";
import './Home.css';
import { browserHistory } from "react-router-3";

export default function Home() {

    const [paisBuscado, setPaisBuscado] = useState("");

    const handleChange = (e) => {
        let pais = e.target.value
        setPaisBuscado(pais.toLowerCase().trim())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        browserHistory.push("/BusquedaPais/" + paisBuscado);
    }

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
            <div className="buscador-container">
                <h3>Busca un país</h3>
                <form className="buscador-bloque" onSubmit={handleSubmit} >
                    <input className="input-busqueda" name="pais" type="search" onChange={handleChange} />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </main>
    );
}
