import React from 'react';
import './style.scss'
import { FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
function Rsociais() {
  return (
    <div className='redesSociais'>
        <a href='https://github.com/YanUeno' target={"_blank"} rel="noreferrer"><FaGithub/></a>
        <a href='https://www.linkedin.com/in/yan-ueno/' target={"_blank"} rel="noreferrer"><FaLinkedin/></a>
        <a href='https://www.instagram.com/yanueno' target={"_blank"} rel="noreferrer"><FaInstagram/></a>
    </div>
  );
}

export default Rsociais;