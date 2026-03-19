import express from 'express';
export const router_aritmeticos = express.Router();

import { mult } from "../../services/operadores/aritmetico/multiplicacao.js";
import { soma } from "../../services/operadores/aritmetico/soma.js";
import { divisao } from "../../services/operadores/aritmetico/divisao.js";
import { mod } from "../../services/operadores/aritmetico/mod.js";
import { potencia } from "../../services/operadores/aritmetico/potencia.js";
import { subtracao } from "../../services/operadores/aritmetico/subtracao.js"
import { expressao } from "../../services/operadores/aritmetico/expressao.js"

router_aritmeticos.get('/soma', (req,res) => {
    let n1 = 20
    let n2 = 15
    let resultado =  soma(n1, n2)//funcao + parametros
    res.send(resultado)
})

router_aritmeticos.get('/mult', (req,res) => {
    let n1 = 20
    let n2 = 15
    let resultado =  mult(n1, n2)
    res.send(resultado)
})

router_aritmeticos.get('/divisao', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = divisao(n1, n2)
    res.send(resultado)
})

router_aritmeticos.get('/mod', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = mod(n1, n2)
    res.send(resultado)
})

router_aritmeticos.get('/potencia', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = potencia(n1, n2)
    res.send(resultado)
})

router_aritmeticos.get('/subtracao', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = subtracao(n1, n2)
    res.send(resultado)
})

router_aritmeticos.get('/expressao', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = expressao(n1, n2)
    res.send(resultado)
})
