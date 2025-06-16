import { useNavigate } from 'react-router-dom';
import medico from '../assets/medico.png';
import wpp from '../assets/whatsapp.png';

export default function FDialogue() {
  const navigate = useNavigate();

  return (
    <div className="firstDialogue">
      <h3>BOAS-VINDAS A AGENDE FÁCIL 🤝</h3>
      <h2>Assistência médica simplificada para todos</h2>
      <p>
        Com a Agende Fácil você mantém todo conforto da sua casa para marcar
        consulta médica em qualquer lugar do Brasil.
      </p>
      <button onClick={() => navigate('/register')} type="button">
        <img className="wppLogo" src={wpp} alt="WhatsApp" /> AGENDE SUA CONSULTA
      </button>
      <img className="med" src={medico} alt="Médico" />
    </div>
  );
}
