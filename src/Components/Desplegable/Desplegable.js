import { React } from "react";
import './Desplegable.css'
import { Link } from "react-router-3"

function Desplegable(props) {

    const { isMenuOpen, handleDesplegable } = props;

    return (
        <div className={`${!isMenuOpen ? 'desplegable hidden' : 'desplegable'}`}>
            <div className="encabezado">
                <button onClick={handleDesplegable} className="menu-desplegable"><i className="fas fa-bars" /></button>
                <h3>MENU</h3>
            </div>
            <div className="cuerpo">
                <div className="links">
                    <p onClick={handleDesplegable}><Link to="/" >Inicio</Link></p>
                    <p onClick={handleDesplegable}><Link to="/Africa" >Africa</Link></p>
                    <p onClick={handleDesplegable}><Link to="/America" >America</Link></p>
                    <p onClick={handleDesplegable}><Link to="/Europa" >Europa</Link></p>
                    <p onClick={handleDesplegable}><Link to="/Oceania" >Oceania</Link></p>

                </div>
                <div className="redes">
                    <i class="fab fa-github"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fas fa-coffee"></i>
                </div>
            </div>
        </div>
    )
}

export default Desplegable;