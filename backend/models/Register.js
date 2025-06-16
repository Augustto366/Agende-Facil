import mongoose, { mongo } from "mongoose";

const consultaSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    celular: String,
    email: String,
    especialidade: String,
    data: String,
    hora: String,
}, {timestamps: true});

export default mongoose.model('Consulta', consultaSchema);