import express from 'express';
export const router_logicos = express.Router();

import { logicoE } from '../../services/operadores/logicos/e.js';
import { logicoOu } from '../../services/operadores/logicos/ou.js';
import { logicoNot } from '../../services/operadores/logicos/not.js';

router_logicos.get('/logicoE', (req, res) => {

    const n1 = 3
    const resposta = logicoE(n1);
    res.send(`O resultado do operador lógico E é: ${resposta}`);
});

router_logicos.get('/logicoOu', (req, res) => {
    const n1 = 3
    const resposta = logicoOu(n1);
    res.send(`O resultado do operador lógico OU é: ${resposta}`);
});

router_logicos.get('/logicoNot', (req, res) => {
    const A = true;
    const B = false;
    const resposta = logicoNot(A, B);
    res.send(`O resultado do operador lógico NOT é: ${resposta}`);
});
