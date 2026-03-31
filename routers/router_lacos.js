import express from 'express';
export const router_lacos = express.Router();

import { forLoop } from '../services/laco/for.js';
import { doWhile } from '../services/laco/doWhile.js';
import { forEach } from '../services/laco/forEach.js';
import { map } from '../services/laco/map.js';
import { whilE } from '../services/laco/while.js';


router_lacos.post('/for', (req, res) => {
    const number = req.body.numbers
    res.json({resposta: `A soma dos números é: ${forLoop(number)}`})
})

router_lacos.get('/doWhile/:numberfoq', (req, res) => {
    const number = req.params.numberfoq
    const resposta = {
        resultado: doWhile(number)
    }
    res.json(resposta)
})

router_lacos.post('/forEach', (req, res) => {
    const alunos = req.body.alunos
    const resposta = {
        resultado: forEach(alunos)
    }
    res.json(resposta)
})

router_lacos.post('/map', (req, res) => {
    const numers = req.body.numbers
    const resposta = {
        resultado: `O quadrado dos números é: ${map(numers)}`
    }
    res.json(resposta)
})

router_lacos.post('/while', (req, res) => {
    const contador = Number(req.body.contador);
    const resposta = {
        resultado: `${whilE(contador)}`
    }
    res.json(resposta)
})