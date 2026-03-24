import express from 'express';
export const router_variaveis = express.Router();

import { constante } from '../services/variaveis/const.js';
import { variavelVar } from '../services/variaveis/var.js';
import { variavelLet } from '../services/variaveis/let.js';

// body
router_variaveis.post('/const', (req, res) => { 
    let idadeAtual = req.body.idadeAtual
    let resposta = {
        resultado: constante(idadeAtual)
    }
    res.json(resposta)
})

// queryString
router_variaveis.get('/var', (req, res) => {
    const b = req.query.base
    const h = req.query.altura
    const resposta = {
        resultado: variavelVar(b, h)
    }
    res.json(resposta);
})

// params
router_variaveis.get('/let/:x', (req, res) => {
    var x = req.params.x
    const resposta = {
        resultado: variavelLet(x)
    } 
    res.json(resposta);
})