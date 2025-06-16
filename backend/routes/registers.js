import express from "express";
import { Router } from "express";
import Consulta from '../models/Register.js';

const route = Router()

route.post('/', async (req, res) => {
    try {
        const consulta = new Consulta(req.body);
        await consulta.save();
        res.status(201).json({message: 'Consulta agendada com sucesso!'})
    } catch (error) {
        res.status(500).json({error: 'Errro ao agendar consulta'});
    }
})

export default route