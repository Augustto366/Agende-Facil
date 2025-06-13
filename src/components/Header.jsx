import React, { Component } from 'react'
import menuBurger from "../assets/menu-burger.png"

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        
        <h2>Agende Fácil</h2> 
        <div className='items'>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Depoimentos</a>
      </div>

        <button className='btncons' type="button">AGENDAR CONSULTA</button>
        <img src={menuBurger}/>

      
       </div>
    )
  }
}

export default Header