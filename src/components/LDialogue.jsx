import React, { Component } from 'react'
import marker from '../assets/marker.png';
import email from '../assets/email.png';
import wpp from '../assets/whatsapp.png'
import cel from '../assets/cel.jpg';

export class LDialogue extends Component {
  render() {
    return (
      <div className='lastd'>
        <div className="desktopLast">
          <h2>Entre em contato com a gente!</h2>
          <p><img className='imge' src={marker}/> R. Aleatória de Melo, 123</p>
          <p><img className='imge' src={email}/> contato@agendefacil.com</p>
          <button className='btn' type="button"> <img className='wppLogo' src={wpp}/> AGENDE SUA CONSULTA</button>
        </div>
        <img src={cel} className="imgl" />
      </div>
    )
  }
}

export default LDialogue