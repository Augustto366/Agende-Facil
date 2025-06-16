import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import registers from '../backend/routes/registers.js'
import mongoose from 'mongoose';
import Consulta from '../backend/models/Register.js';
import { configDotenv } from 'dotenv';

configDotenv();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const uri = process.env.MONGO_URI;

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());

app.use('/register', registers);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado ao Mongo')).catch(err => console.log((err)));

app.get(/^(?!.*\.[a-zA-Z0-9]+$).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

app.listen(PORT, () => {
    console.log('Server on air');
})