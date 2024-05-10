import React from 'react';
import './style.scss'
function Timeline(items) {
    // console.log("asdadasd",items.items.slice(0).reverse());
  return (
    <div className='LinhaDoTempotempo'>
        <div className='row txt'>
            {
                items.items.slice(0).reverse().map((item =>(
                    <div className='col-md-12 item' key={item.key} >
                        <h5 className='ano'>{item.Inicio} - {item.Fim} <br/> {item.Funcao}</h5>
                        <h4 className='lugar'>{item.Nome}</h4>
                        <h5 className='conteudo'>{item.descricao}</h5>
                    </div> 
                )))
            }
        </div>
        
    </div>
  );
}

export default Timeline;