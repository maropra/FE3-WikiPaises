import React from "react";
import useFetch from "../../Hooks/useFetch";
import "./Regiones.css";
import { Link } from "react-router-3";

function America() {
    const { paises, isLoading } = useFetch("https://restcountries.com/v3.1/region/america");

    const listadoPaises = paises.map(pais => {
        return (
            <div key={pais.cca2} className="tarjeta-pais">
                <Link to={`/FichaPais/${pais.name.common}`}>
                    <img src={pais.flags.png} alt={pais.name.common} />
                    <div className="tarjeta-info">
                        <h3>{pais.name.common}</h3>
                        <div className="tarjeta-texto">
                            <p><strong>Region:</strong> {pais.subregion}</p>
                            <p><strong>Capital:</strong> {pais.capital}</p>
                            <p><strong>Población:</strong> {pais.population}</p>
                        </div>
                    </div>
                </Link>
            </div>

        )
    })

    return (
        <main className={isLoading ? "region" : "region-cargando"}>
            <h2>Paises de America</h2>
            <div className="listado-paises">
                {!isLoading ? (
                    <div className="cargando">
                        <div className="spinner" />
                        <h2>Cargando</h2>
                    </div>
                ) : (
                    listadoPaises
                )}

            </div>
        </main>
    );
}


export default America;