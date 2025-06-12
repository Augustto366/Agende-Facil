import React, { Component } from 'react'
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'><h3>ConsultaOnline</h3> <small>©2025 Porto Alegre. <br />Todos os direitos reservados. </small><div> <img src={instagram}/> <img src={facebook}/> <img src={youtube}/></div></div>
    )
  }
}

export default Footer