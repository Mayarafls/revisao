import express from 'express';
export const router_switch = express.Router();

import { semana } from '../services/switch/switch.js';

router_switch.get('/semana/:dia', (req, res) => {
    let resp = req.params.dia
    const resultado = semana(resp);
    res.send(resultado);
});