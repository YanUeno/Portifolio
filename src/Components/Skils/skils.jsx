/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './style.scss'

import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaNodeJs, FaCode, FaPhp, FaJava, FaVuejs, FaReact } from "react-icons/fa";
// import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { SiTypescript, SiMongodb, SiCsharp, SiTailwindcss } from "react-icons/si";
import { ImGit } from "react-icons/im";
function Skils() {
  return (
    <div className='row skils_card'>

      <div className='col-12 skills' data-aos-once='true' data-aos="fade-right" >
        <div className='col-6 col-md-3'>
          <FaHtml5 /> HTML5
        </div>
        <div className='col-6 col-md-3'>
          <FaCss3Alt /> CSS3
        </div>
        <div className='col-6 col-md-3'>
          <FaSass /> Sass
        </div>
        <div className='col-6 col-md-3'>
          <SiTailwindcss /> TailWind
        </div>
      </div>
      <div className='col-12 skills' data-aos-once='true' data-aos="fade-right" >
        <div className='col-6 col-md-3'>
          <SiCsharp /> C#
        </div>
        <div className='col-6 col-md-3'>
          <FaNodeJs /> Node.js
        </div>
        <div className='col-6 col-md-3'>
          <FaJava /> java
        </div>
        <div className='col-6 col-md-3'>
          <FaPhp /> php
        </div>
      </div>
      <div className='col-12 skills' data-aos-once='true' data-aos="fade-right" >
        <div className='col-6 col-md-3'>
          <FaJsSquare /> Javascript
        </div>
        <div className='col-6 col-md-3'>
          <SiTypescript /> Typescript
        </div>

        <div className='col-6 col-md-3'>
          <FaReact /> React.js
        </div>
        <div className='col-6 col-md-3'>
          <FaVuejs /> Vue.js
        </div>
      </div>
      <div className='col-12 skills' data-aos-once='true' data-aos="fade-right" >
        <div className='col-6 col-md-3'>
          <DiMysql /> Mysql
        </div>
        <div className='col-6 col-md-3'>
          <SiMongodb /> MongoDB
        </div>
        <div className='col-6 col-md-3'>
          <ImGit /> Git
        </div>
      </div>
    </div>
  );
}

export default Skils;