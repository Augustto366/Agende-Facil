import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import registers from '../backend/routes/registers.js'
import mongoose from 'mongoose';
import Consulta from '../backend/models/Register.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());

app.use('/register', registers);

mongoose.connect('mongodb+srv://augustto366:i1fpNNEj17B0rbHq@consultas.m9hip17.mongodb.net/consultasdb?retryWrites=true&w=majority&appName=Consultas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado ao Mongo')).catch(err => console.log((err)));

app.get(/^(?!.*\.[a-zA-Z0-9]+$).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

app.listen(PORT, () => {
    console.log('Server on air');
})