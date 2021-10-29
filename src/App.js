import './App.css';
import Home from "./Components//Home/Home";
import America from "./Components/Regiones/America";
import Africa from "./Components/Regiones/Africa";
import Europa from "./Components/Regiones/Europa";
import Oceania from "./Components/Regiones/Oceania";
import TemplateGeneral from "./Components/TemplateGeneral";
import { Router, Route, browserHistory, IndexRoute } from 'react-router-3';
import FichaPais from './Components/FichaPais/FichaPais';
import ResultadosBusqueda from './Components/ResultadosBusqueda/ResultadosBusqueda';

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/" component={TemplateGeneral}>
          <IndexRoute component={Home} />
          <Route path="/Africa" component={Africa} />
          <Route path="/America" component={America} />
          <Route path="/Europa" component={Europa} />
          <Route path="/Oceania" component={Oceania} />
          <Route path="FichaPais/:pais" component={FichaPais} />
          <Route path="BusquedaPais/:pais" component={ResultadosBusqueda} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
