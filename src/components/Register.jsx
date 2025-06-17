import { useState } from 'react';
import '../styles/App.css'
import retu from '../assets/return.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        celular: '',
        email: '',
        especialidade: '',
        data: '',
        hora: ''
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });
    
        if (response.ok) {
            toast.success('Consulta agendada com sucesso!');
    
            const mensagem = `Olá, ${form.nome}! Sua consulta foi agendada com sucesso:\n 🩻 Especialidade: ${form.especialidade}\n 📅 Data: ${form.data}\n ⏰ Hora: ${form.hora}`;
    
            const celularLimpo = form.celular.replace(/\D/g, '');
    
            const url = `https://wa.me/55${celularLimpo}?text=${encodeURIComponent(mensagem)}`;
    
            window.open(url, '_blank');
    
            setForm({
                nome: '',
                cpf: '',
                celular: '',
                email: '',
                especialidade: '',
                data: '',
                hora: ''
            });
        } else {
            toast.error('Erro ao agendar consulta!');
        }
    
    }

    return (
        <div className='all'>
            <div className='boxTest'>
                <img onClick={() => navigate('/')} src={retu} className='return'/>
                <h1>Marcar Consulta</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} required />
                    <input type="text" name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} required />
                    <input type="tel" name="celular" placeholder="Celular" value={form.celular} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                    <select name="especialidade" value={form.especialidade} onChange={handleChange} required>
                        <option value="">Selecione a especialidade</option>
                        <option>Clínico Geral</option>
                        <option>Cardiologia</option>
                        <option>Dermatologia</option>
                        <option>Ginecologia</option>
                        <option>Ortopedia</option>
                        <option>Pediatria</option>
                        <option>Neurologia</option>
                        <option>Oftalmologia</option>
                        <option>Psiquiatria</option>
                        <option>Endocrinologia</option>
                    </select>
                    <input type="date" name="data" value={form.data} onChange={handleChange} required />
                    <input type="time" name="hora" value={form.hora} onChange={handleChange} required />
                    <button type="submit">Agendar Consulta</button>
                </form>
            </div>
            <ToastContainer
            position="bottom-left"
            autoClose={3000} 
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" />
        </div>
    );
}

