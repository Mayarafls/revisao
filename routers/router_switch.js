import express from 'express';
export const router_switch = express.Router();

import { semana } from '../services/switch/switch.js';

router_switch.get('/semana', (req, res) => {
    const dia = 2; // Exemplo de número do dia da semana
    const resultado = semana(dia);
    res.send(resultado);
});