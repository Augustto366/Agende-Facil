import React, { Component } from 'react'
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';

export class Menu extends Component {
  render() {
    return (
        <div className='menu'>
         
       
          <a className='alink' href="#">Início</a>
          <a className='alink' href="#">Sobre</a>
          <a className='alink' href="#">Serviços</a>
          <a className='alink' href="#">Depoimentos</a>
      

        <button className='btnMenu' type="button">AGENDAR CONSULTA</button>

        <div className='imgs'>
                  <img src={instagram} /> <img src={facebook} /> <img src={youtube} />
                </div>
        
        </div>
      
    )
  }
}

export default Menu