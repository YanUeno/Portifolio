import React, { useState } from 'react';
import './style.scss'
import Image from 'react-bootstrap/Image'
import RedesSociais from '../RedesSociais/RedesSociais'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from 'react-icons/ai';
import imgPerfil from './perfil.jpg';
function Navbar({ menu, setMenu }) {
  return (
    <aside className={`aside ${menu ? "" : "w0"}`} >
      <div className='perfil'>
        <div className='imgDiv'>
          <Image src={imgPerfil} className='imgPerfil' />
        </div>
        <button className='cmdMenu' onClick={() => setMenu(!menu)}><AiOutlineMenuFold /></button>
        <h3>Yan massahiro ueno <br /> Full Stack Developer</h3>
      </div>
      <div className='descricao'>
        <p>
          Estudante na área da tecnologia, sempre buscando me aventurar e conhecer mais do mundo!
        </p>
      </div>
      <div className='rsociais'>
        <RedesSociais />
      </div>
      <div className='Menu'>
        <ul>
          <li>
            <Link to="" className='link'>
              <button className='btn_link' onClick={()=>setMenu(!menu)}>
                Sobre
              </button>
            </Link>
          </li>
          <li>
            <Link to="Projetos" className='link' onClick={()=>setMenu(!menu)}>
              <button className='btn_link'>
                Projetos
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </aside>
  );
}

export default Navbar;