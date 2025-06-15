import Header from './components/Header';
import './styles/App.css';
import Footer from './components/Footer';
import FDialogue from './components/FDialogue';
import DivSub from './components/DivSub';
import SDialogue from './components/SDialogue';
import TDialogue from './components/TDialogue';
import LDialogue from './components/LDialogue';
import menuBurger from "./assets/menu-burger.png"
import closeBurguer from '../src/assets/x.png'
import Menu from './components/Menu';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

    
        const [open, setOpen] = useState(false);

    function toggleMenu() {
        
        setOpen(!open)
    }

    useEffect(() => {
        if (open) {
            document.body.classList.add('menu-open');    
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [open]);

    
    

    return (    
      <>
      <Header onMenuClick={toggleMenu} menuIcon={open ? closeBurguer : menuBurger} />
      {open && <Menu />}
      <main>
          <div className='first'>
              <FDialogue/>
              <DivSub/>
          </div>

          <div className='second'>
              <SDialogue/>
          </div>

          <div className='three'>
              <TDialogue/>
          </div>

          <div className='last'>
              <LDialogue/>
          </div>
      </main>
      <div className='foot'>
          <Footer/>
      </div>
      
      </>
      
    )
  }

export default App
