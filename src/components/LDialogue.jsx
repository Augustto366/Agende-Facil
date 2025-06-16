import { useNavigate } from 'react-router-dom';
import marker from '../assets/marker.png';
import email from '../assets/email.png';
import wpp from '../assets/whatsapp.png';
import cel from '../assets/cel.jpg';

export default function LDialogue() {
  const navigate = useNavigate();

  return (
    <div className="lastd">
      <div className="desktopLast">
        <h2>Entre em contato com a gente!</h2>
        <p>
          <img className="imge" src={marker} alt="Endereço" /> 
          R. Aleatória de Melo, 123
        </p>
        <p>
          <img className="imge" src={email} alt="Email" /> 
          contato@agendefacil.com
        </p>
        <button 
          onClick={() => navigate('/register')} 
          className="btn" 
          type="button"
        >
          <img className="wppLogo" src={wpp} alt="WhatsApp" /> 
          AGENDE SUA CONSULTA
        </button>
      </div>

      <img src={cel} className="imgl" alt="Celular" />
    </div>
  );
}
