import React, { useEffect, useState } from 'react';
import img1 from "./src/ReactTSX.png"
import img2 from "./src/ReactTSX2.png"
import img3 from "./src/frontend.png"
import './style.scss'
function Certificados() {
    return (
        <div className='container'>
            <div className='row certificados'>
                <div  className='col-12 col-md-4 '>
                    <img src={img1} alt="Certificado React Typescript" />
                </div>          
                <div  className='col-12 col-md-4 '>
                    <img src={img2} alt="Certificado React Typescript" />
                </div>          
                <div  className='col-12 col-md-4 '>
                    <img src={img3} alt="Certificado React Typescript" />
                </div>          
            </div>
        </div>
    );
}

export default Certificados;