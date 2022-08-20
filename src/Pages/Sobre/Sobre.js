import React from 'react';
import Timeline from '../../Components/Timeline/timeline';
import './style.scss'
import { Trabalhos } from '../../Dados/Trabalhos'
import { Formacao } from '../../Dados/FormacaoAcademica'
import Skils from '../../Components/Skils/skils'
function Rsociais() {
  return (
    <div className=''>
      <div className='Card'>
        <h2 className='title'>
          <span className='num'>1.</span> Sobre mim
        </h2>
        
        <h4 className='txt'>
        Olá, eu sou o Yan. Prazer em conhecê-lo. Comecei a minha jornada como Desenvolvedor em 2018 no meu colegio médio técnico onde tive meu primeiro contato com a programação, logo depois me apaixonei pela área então fiz meus primeiros freelances em 2020, logo depois dando inicio ao meu estágio, na qual pude por em prática  muitas das habilidades que havia aprendido no colegio. Hoje me encontro atuando como desenvolvedor Full Stack junior, porém, sempre tentando aprender novas tecnologias ampliando meus conhecimentos na área.
        </h4>
      </div>

      <div className='Card'>
        <h2 className='title'>
          <span className='num'>2.</span> Minhas habilidades
        </h2>
        <Skils/>
      </div>

      <div className='Card'>
        <h2 className='title'>
          <span className='num'>4.</span> Formação Academica
        </h2>
        <Timeline items ={Formacao}/>
      </div>

      <div className='Card'>
        <h2 className='title'>
          <span className='num'>3.</span> Experiencia Profissional
        </h2>
        <Timeline items={Trabalhos}/>
      </div>
    </div>
  );
}

export default Rsociais;