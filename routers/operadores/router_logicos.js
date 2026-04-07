import express from 'express';
export const router_logicos = express.Router();

import { logicoE } from '../../services/operadores/logicos/e.js';
import { logicoOu } from '../../services/operadores/logicos/ou.js';
import { logicoNot } from '../../services/operadores/logicos/not.js';

router_logicos.get('/E/:n1', (req, res) => {
    const n1 = req.params.n1
    const resposta = logicoE(Number(n1));
    res.send(`O resultado do operador lógico E é: ${resposta}`);
});

router_logicos.get('/ou/:n1', (req, res) => {
    const n1 = req.params.n1
    const resposta = logicoOu(Number(n1));
    res.send(`O resultado do operador lógico OU é: ${resposta}`);
});

router_logicos.get('/not/:a', (req, res) => {
    const {A} = req.params
    const resposta = logicoNot(A);
    res.send(`O resultado do operador lógico NOT é: ${resposta}`);
});
