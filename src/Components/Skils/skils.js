import React from 'react';
import './style.scss'

import { FaHtml5 , FaCss3Alt, FaSass, FaJsSquare, FaGitSquare,FaCode,FaPhp,FaJava,FaVuejs,FaReact  } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
function Skils() {
  return (
    <div className='row skils_card'>
          <div className='col-12 col-md-3'>
            <ul className='skils'>
              <li><FaHtml5/> Html</li>
              <li><FaCss3Alt/> Css</li>
              <li><FaSass/> Sass</li>
              <li><FaJsSquare/> Javascript</li>
              <li><FaCode/> Typescript</li>
            </ul>
          </div>
          <div className='col-12 col-md-3'>
            <ul className='skils'>
              <li><FaGitSquare/> Git</li>
              <li><FaCode/> C++</li>
              <li><FaPhp/> php</li>
              <li><FaJava/> java</li>
              <li><FaCode/> C#</li>
            </ul>
          </div>
          <div className='col-12 col-md-3'>
            <ul className='skils'>
              <li><FaCode/> Vb.net</li>
              <li><FaVuejs/> Vue.js</li>
              <li><FaReact/> React</li>
              <li><DiMysql/> Mysql</li>
            </ul>
          </div>
        </div>
  );
}

export default Skils;