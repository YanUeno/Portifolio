import React from 'react';
import './style.scss'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function ProjectCards(props) {
  return (
    <div className='container main' data-aos="fade-right">
      <div className='row espacamento'>
        <a href='https://github.com/YanUeno' target={"_blank"} rel="noreferrer" className='LinkGh'>GitHub <FaGithub /></a>
        <div className='col-md-12'>
          <div className='Mcard'>

            <div className='linguagem'>
              <span>HTML</span>
            </div>
            <div className=''>

              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
              </Card.Text>
              <Link to="Projetos" className='link'>
                <button className='btn_link'>
                  Ler mais
                </button>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;