import React from "react";
import { browserHistory } from "react-router-3";
import useFetch from "../../Hooks/useFetch";
import './FichaPais.css'

export default function FichaPais(props) {

    const pais = props.params.pais;
    const url = "https://restcountries.com/v3.1/name/" + pais

    const { paises, isLoading } = useFetch(url)

    const handleVolver = () => {
        browserHistory.goBack()
    }

    return (
        <main className="ficha-pais">
            {!isLoading ?
                <p>Cargando</p>
                : (
                    <>
                        <button className="btn-volver" onClick={handleVolver}>← Volver</button>
                        <img src={paises[0].flags.png} alt={paises[0].name.common} />
                        <div className="pais-info">
                            <h3>{paises[0].name.common}</h3>
                            <div className="pais-texto">
                                <div>
                                    <p><strong>Nombre Oficial:</strong> {paises[0].name.official}</p>
                                    <p><strong>Region:</strong> {paises[0].region}</p>
                                    <p><strong>Sub Region:</strong> {paises[0].subregion}</p>
                                    <p><strong>Capital:</strong> {paises[0].capital}</p>
                                </div>
                                <div>
                                    <p><strong>Poblacion:</strong> {paises[0].population}</p>
                                    <p><strong>Area:</strong>{paises[0].area} </p>
                                    <p><strong>Independizado:</strong> {paises[0].independent ? "SI" : "NO"}</p>
                                </div>

                            </div>

                        </div>
                    </>
                )
            }
        </main>
    );
}