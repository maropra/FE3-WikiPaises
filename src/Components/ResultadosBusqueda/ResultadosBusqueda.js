import React, { useEffect } from "react";
import { Link } from "react-router-3";
import useFetch from "../../Hooks/useFetch";


export default function Home(props) {

    const paisBuscado = props.params.pais
    const url = "https://restcountries.com/v3.1/name/" + paisBuscado
    const { paises, isLoading } = useFetch(url);

    useEffect(() => {
        console.log(paisBuscado);
        console.log(url);
        console.log(paises);
        console.log(isLoading);
    })

    const listarPaises = () => {
        let listadoPaises = "";
        if (paises.length > 0) {
            listadoPaises = paises.map(pais => {
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
            return listadoPaises;
        } else {
            return (
                <div className="error">
                    <i class="fas fa-exclamation-circle"></i>
                    <h2 className="not-found">No se encontró el pais, intente buscarlo por su nombre en inglés.</h2>
                </div>
            )
        }
    }



    return (
        <main className={isLoading && paises.length > 0 ? "region" : "region-cargando"}>
            <h2>Paises Encontrados</h2>
            <div className="listado-paises">
                {!isLoading ? (
                    <div className="cargando">
                        <div className="spinner" />
                        <h2>Cargando</h2>
                    </div>
                ) : (
                    listarPaises()
                )}

            </div>
        </main>
    );
}