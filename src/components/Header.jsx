import React, { Component } from 'react'
import menuBurger from "../assets/menu-burger.png"

export class Header extends Component {
  render() {
    const { onMenuClick } = this.props;
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
        <img onClick={onMenuClick} id='burguer' src={menuBurger}/>

      
       </div>
    )
  }
}

export default Header