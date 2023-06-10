import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssReset.css';
import './MainStyle.scss'
import Sobre from './Pages/Sobre/Sobre'
import Projetos from './Pages/Projetos/Projetos'
import Error from './Pages/Error/Error'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
function App() {
  const [menu, setMenu] = useState(false);
  AOS.init({
    duration: 1000,
  });
  return (
    <Router>
      <div className="container-fluid main">
        <Navbar menu={menu} setMenu={setMenu} />
        <div className="row">
          <div className={`animation col-md-12 main_page `}>
            {
              !menu ?
                <button className='MenuButton' onClick={() => setMenu(!menu)}><AiOutlineMenuUnfold /></button>
                :
                null
            }
            <Routes>
              <Route exact path="/" element={<Sobre />} />
              <Route exact path="/Projetos" element={<Projetos />} />
              <Route exact path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;