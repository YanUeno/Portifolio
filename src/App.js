import React from "react";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssReset.css';
import './MainStyle.scss'
import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/Sobre'
import Projetos from './Pages/Projetos/Projetos'
function App() {
  return (
    <Router>
      <div className="container-fluid main">
        <div className="row">
          <div className="col-md-3">
            <Navbar/>
          </div>
          <div className="col-md-9 main_page">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/Sobre" element={<Sobre/>}/>
              <Route exact path="/Projetos" element={<Projetos/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;