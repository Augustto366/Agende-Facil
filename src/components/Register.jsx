import { useState } from 'react';
import '../styles/App.css'


export default function Register() {
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
            alert('Consulta agendada com sucesso!');
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
            alert('Erro ao agendar consulta.');
        }
    }

    return (
        <div className='boxTest'>
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
    );
}

