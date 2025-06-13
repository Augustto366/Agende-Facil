import React, { Component } from 'react'
import comp from '../assets/comp.jpg';

export class TDialogue extends Component {
  render() {
    return (
      <div className='tdialogue'>
        <div className='divDesktop'>
          <h5>SOBRE NÓS</h5>
          <h3>Entenda quem somos e por que existimos</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores, provident voluptate aliquid expedita voluptates excepturi maiores quidem sequi eveniet velit quasi molestiae cupiditate quia quis, voluptas veritatis sapiente eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus quas omnis maiores repellendus aspernatur veritatis nesciunt. Explicabo perspiciatis ducimus cumque modi vel ipsam nisi suscipit consequuntur! Harum, tempora. Deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam reiciendis, doloremque deserunt esse reprehenderit officiis! Totam modi quo explicabo possimus enim similique. Voluptatibus repellat in excepturi amet voluptate illo.</p>
        </div>
        <img src={comp}/>
      </div>
    )
  }
}

export default TDialogue