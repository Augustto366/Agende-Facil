import Header from './components/Header';
import './styles/App.css';
import Footer from './components/Footer';
import FDialogue from './components/FDialogue';
import DivSub from './components/DivSub';
import SDialogue from './components/SDialogue';
import TDialogue from './components/TDialogue';
import LDialogue from './components/LDialogue';


function App() {

    return (    
      <>
      <Header/>
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
