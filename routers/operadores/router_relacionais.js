import express from 'express';
export const router_relacionais = express.Router();

import { diferente } from "../../services/operadores/relacionais/diferente.js"
import { igual } from "../../services/operadores/relacionais/igual.js"
import { maior } from "../../services/operadores/relacionais/maior.js"
import { maiorIgual } from "../../services/operadores/relacionais/maiorIgual.js"
import { menor } from "../../services/operadores/relacionais/menor.js"
import { menorIgual } from "../../services/operadores/relacionais/menorIgual.js"

router_relacionais.get('/diferente/:n1/', (req, res) => {
    const n1 = req.params.n1
    const resultado = {
        resposta: diferente(Number(n1))
    }
    res.json(resultado);
})

router_relacionais.get('/igual/:n1/', (req, res) => {
    const n1 = req.params.n1
    const resultado = {
        resposta: igual(Number(n1))
    }
    res.json(resultado);
})

router_relacionais.get('/maior/:n1/', (req, res) => {
    const n1 = req.params.n1
    const resultado = {
        resposta: maior(Number(n1))
    }
    res.json(resultado);
})

router_relacionais.get('/maiorIgual/:n1/', (req, res) => {
    const n1 = req.params.n1
    const resultado = {
        resposta: maiorIgual(Number(n1))
    }
    res.json(resultado);
})

router_relacionais.get('/menor/:n1/', (req, res) => {
    const n1 = req.params.n1
    const resultado = {
        resposta: menor(Number(n1))
    }
    res.json(resultado);
})

router_relacionais.get('/menorIgual/:n1/', (req, res) => {
    const n1 = req.params.n1
    const resultado = {
        resposta: menorIgual(Number(n1))
    }
    res.json(resultado);
})