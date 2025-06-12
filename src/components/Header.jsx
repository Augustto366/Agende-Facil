import React, { Component } from 'react'
import menuBurger from "../assets/menu-burger.png"

export class Header extends Component {
  render() {
    return (
      <div className='header'><h2>ConsultaOnline</h2> <img src={menuBurger}/> </div>
    )
  }
}

export default Header