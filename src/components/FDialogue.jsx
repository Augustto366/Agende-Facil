import React, { Component } from 'react'
import medico from '../assets/medico.png';
import wpp from '../assets/whatsapp.png';

export class FDialogue extends Component {
  render() {
    return (
      <div className='firstDialogue'>
        <h3>BOAS-VINDAS A AGENDE FÁCIL 🤝</h3>
        <h2>Assistência médica simplificada para todos</h2>
        <p>Com a Agende Fácil você mantém todo conforto da sua casa para marcar  consulta médica em qualquer lugar do Brasil.</p>
        <button type="button"> <img className='wppLogo' src={wpp}/> AGENDE SUA CONSULTA</button>
        <img className='med' src={medico}/>
      </div>
    )
  }
}

export default FDialogue