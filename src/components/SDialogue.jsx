import React, { Component } from 'react'
import check from '../assets/check.png';

export class SDialogue extends Component {
    render() {
        return (
            <div className='secondDialogue'>
                <p className='fp'>SERVIÇOS</p>
                <h2>Como podemos <br /> ajudá-lo a se sentir <br /> melhor?</h2>

                <div className='box'>
                    <img src={check} />
                    <h3>Problemas digestivos</h3>
                    <p>Lorem, ipsum dolor sit am eaqueore. Ullam quibusdam rem recusandae, quia reiciendis quo m!</p>
                </div>
                <div className='box'>
                    <img src={check} />
                    <h3>Saúde hormonal</h3>
                    <p>Lorem, ipsum dolor sit am eaqueore. Ullam quibusdam rem recusandae, quia reiciendis quo m!</p>
                </div><div className='box'>
                    <img src={check} />
                    <h3>Bem-estar mental</h3>
                    <p>Lorem, ipsum dolor sit am eaqueore. Ullam quibusdam rem recusandae, quia reiciendis quo m!</p>
                </div><div className='box'>
                    <img src={check} />
                    <h3>Cuidados Pediátricos</h3>
                    <p>Lorem, ipsum dolor sit am eaqueore. Ullam quibusdam rem recusandae, quia reiciendis quo m!</p>
                </div><div className='box'>
                    <img src={check} />
                    <h3>Autoimune e inflamação</h3>
                    <p>Lorem, ipsum dolor sit am eaqueore. Ullam quibusdam rem recusandae, quia reiciendis quo m!</p>
                </div><div className='box'>
                    <img src={check}/>
                    <h3>Saúde do Coração</h3>
                    <p>Lorem, ipsum dolor sit am eaqueore. Ullam quibusdam rem recusandae, quia reiciendis quo m!</p>
                </div>
            </div>
        )
    }
}

export default SDialogue