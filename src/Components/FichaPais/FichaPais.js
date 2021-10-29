import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./FichaPais.css";

export default function FichaPais() {
  let { pais } = useParams();

  let pais1 = "dominica";
  const url = "https://restcountries.com/v3.1/name/" + pais;
  console.log("url:" + url);
  const { paises, isLoading } = useFetch(url);
  console.log("info pais");
  console.log(paises);

  return (
    <main className="ficha-pais">
      {!isLoading ? (
        <p>Cargando</p>
      ) : (
        <>
          <img src={paises[0].flags.png} alt={paises[0].name.common} />
          <div className="pais-info">
            <h3>{paises[0].name.common}</h3>
            <div className="pais-texto">
              <div>
                <p>Nombre Oficial: {paises[0].name.official}</p>
                <p>Region: {paises[0].region}</p>
                <p>Sub Region: {paises[0].subregion}</p>
                <p>Capital: {paises[0].capital}</p>
              </div>
              <div>
                <p>Poblacion: {paises[0].population}</p>
                <p>Area:{paises[0].area} </p>
                <p>Independizado: {paises[0].independent ? "SI" : "NO"}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
