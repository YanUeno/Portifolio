import React from 'react';
import Timeline from '../../Components/Timeline/timeline';
import './style.scss'
import { Trabalhos } from '../../Dados/Trabalhos'
import { Formacao } from '../../Dados/FormacaoAcademica'
import Certificados from '../../Components/Certificados/certificados';
import Skils from '../../Components/Skils/skils'
function Rsociais() {
  return (
    <div className=''>
      <div className='Card'>
        <h2 className='title'>
          <span className='num'>1.</span> Sobre mim
        </h2>
        
        <h4 className='txt'>
        Olá, meu nome é Yan, sou um desenvolvedor formado em técnico de informática, atualmente cursando Engenharia da Computação. Desde 2020, venho trabalhando com desenvolvimento de software e, durante esse período, adquiri experiência em diversas linguagens de programação, como JavaScript e C#. Estou sempre em busca de novos desafios, onde possa aplicar e aprimorar minhas habilidades e conhecimentos. Se você estiver em busca de um desenvolvedor dedicado, pró-ativo e apaixonado por tecnologia, não hesite em entrar em contato comigo!
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

      <div className='Card'>
        <h2 className='title'>
          <span className='num'>4.</span> Certificados
        </h2>
        <Certificados/>
      </div>
    </div>
  );
}

export default Rsociais;