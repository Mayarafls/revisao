import express from 'express';
export const router_variaveis = express.Router();

import { constante } from '../services/variaveis/const.js';
import { variavelVar } from '../services/variaveis/var.js';
import { variavelLet } from '../services/variaveis/let.js';

router_variaveis.get('/const', (req, res) => { 
    let idadeAtual = 17
    let resultado = constante(idadeAtual)
    res.send(resultado)
})

router_variaveis.get('/var', (req, res) => {
    const b = 12
    const h = 15
    const resposta = variavelVar(b, h);
    res.send(resposta);
})

router_variaveis.get('/let', (req, res) => {
    var x = 7
    const resposta = variavelLet(x);
    res.send(resposta);
})