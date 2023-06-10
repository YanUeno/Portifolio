import React from 'react';
import Timeline from '../../Components/Timeline/timeline';
import './style.scss'
import { Trabalhos } from '../../Dados/Trabalhos'
import { Formacao } from '../../Dados/FormacaoAcademica'
import Certificados from '../../Components/Certificados/certificados';
import Skils from '../../Components/Skils/skils'
import yan from "../../images/yan ueno.jpg"
function Rsociais() {
  return (
    <>
      <div className="container-fluid bg">
        <div className='apresentation typewriter'>
          <h1>Olá, Sou <span>Yan Ueno</span> </h1>
          <h2>Dev. Full Stack Junior 👨🏽‍💻</h2>
          <br />
          <h3>Bem vindo ao meu portfólio !</h3>
        </div>
      </div>
      <div className='container'>
        <div className="row" data-aos="fade-right">
          <div className=" col-12 col-md-5">
            <div className='Card centralizar'>
              <img src={yan} alt="Yan Ueno" className='imagem' />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className='Card'>
              <h2 className='title'>
                <span className='num'>1.</span> Sobre mim
              </h2>
              <p className='txt'>
                Olá, meu nome é Yan, sou um desenvolvedor formado em técnico de informática, atualmente cursando Engenharia da Computação. Desde 2020, venho trabalhando com desenvolvimento de software e, durante esse período, adquiri experiência em diversas linguagens de programação, como JavaScript e C#.
              </p>
              <p className='txt'>
                Estou sempre em busca de novos desafios, onde possa aplicar e aprimorar minhas habilidades e conhecimentos. Se você estiver em busca de um desenvolvedor dedicado, pró-ativo e apaixonado por tecnologia, não hesite em entrar em contato comigo!
              </p>
            </div>
          </div>
        </div>


        <div className='Card' >
          <h2 className='title' data-aos="fade-right">
            <span className='num'>2.</span> Minhas habilidades
          </h2>
          <Skils />
        </div>

        <div className='Card' data-aos="fade-right">
          <h2 className='title'>
            <span className='num'>3.</span> Formação Academica
          </h2>
          <Timeline items={Formacao} />
        </div>

        <div className='Card' data-aos="fade-right">
          <h2 className='title'>
            <span className='num'>4.</span> Experiencia Profissional
          </h2>
          <Timeline items={Trabalhos} />
        </div>

        <div className='Card' data-aos="fade-right">
          <h2 className='title'>
            <span className='num'>5.</span> Certificados
          </h2>
          <Certificados />
        </div>
      </div>
    </>

  );
}

export default Rsociais;