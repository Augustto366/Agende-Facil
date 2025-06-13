import React, { Component } from 'react'

export class DivSub extends Component {
    render() {
        return (
            <div className='block'>
                <div className='blockd'>
                    <h2>+3.500</h2>
                    <p>Pacientes atendidos</p>
                </div>

                <div className='blockd'>
                    <h2>+10</h2>
                    <p>Especialistas disponíveis</p>
                </div>

                <div>
                    <h2>+25</h2>
                    <p>Anos no mercado</p>
                </div>
            </div>

        )
    }
}

export default DivSub