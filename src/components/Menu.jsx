import React from 'react';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
    const navigate = useNavigate();

    return (
        <div className='menu'>
            <a className='alink' href="#">Início</a>
            <a className='alink' href="#">Sobre</a>
            <a className='alink' href="#">Serviços</a>
            <a className='alink' href="#">Depoimentos</a>

            <button 
                onClick={() => navigate('/register')} 
                className='btnMenu' 
                type="button"
            >
                AGENDAR CONSULTA
            </button>

            <div className='imgs'>
                <img src={instagram} alt="Instagram" />
                <img src={facebook} alt="Facebook" />
                <img src={youtube} alt="YouTube" />
            </div>
        </div>
    );
}


