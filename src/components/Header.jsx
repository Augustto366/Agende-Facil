import { useNavigate } from 'react-router-dom';

export default function Header({ onMenuClick, menuIcon }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h2>Agende Fácil</h2>
      
      <div className="items">
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Depoimentos</a>
      </div>

      <button onClick={() => navigate('/register')} className="btncons" type="button">
        AGENDAR CONSULTA
      </button>

      <img
        onClick={onMenuClick}
        id="burguer"
        src={menuIcon}
        alt="Menu"
      />
    </div>
  );
}
