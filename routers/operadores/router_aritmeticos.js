import express from 'express';
export const router_aritmeticos = express.Router();

import { mult } from "../../services/operadores/aritmetico/multiplicacao.js";
import { soma } from "../../services/operadores/aritmetico/soma.js";
import { divisao } from "../../services/operadores/aritmetico/divisao.js";
import { mod } from "../../services/operadores/aritmetico/mod.js";
import { potencia } from "../../services/operadores/aritmetico/potencia.js";
import { subtracao } from "../../services/operadores/aritmetico/subtracao.js"
import { expressao } from "../../services/operadores/aritmetico/expressao.js"

router_aritmeticos.get('/soma/:n1/:n2', (req,res) => {
    let {n1, n2} = req.params

    let resultado =  soma(Number(n1), Number(n2))
    res.send(resultado)
})

router_aritmeticos.get('/mult/:n1/:n2', (req,res) => {
    let {n1, n2} = req.params

    let resultado =  mult(Number(n1), Number(n2))
    res.send(resultado)
})

router_aritmeticos.get('/divisao/:n1/:n2', (req,res) => {
    let {n1, n2} = req.params

    let resultado =  divisao(Number(n1), Number(n2))
    res.send(resultado)
})

router_aritmeticos.get('/mod/:n1/:n2', (req,res) => {
    let {n1, n2} = req.params

    let resultado =  mod(Number(n1), Number(n2))
    res.send(resultado)
})

router_aritmeticos.get('/potencia/:n1/:n2', (req,res) => {
    let {n1, n2} = req.params

    let resultado =  potencia(Number(n1), Number(n2))
    res.send(resultado)
})

router_aritmeticos.get('/subtracao/:n1/:n2', (req,res) => {
    let {n1, n2} = req.params

    let resultado =  subtracao(Number(n1), Number(n2))
    res.send(resultado)
})

router_aritmeticos.get('/expressao/:n1/:n2', (req,res) => {
    let {n1, n2} = req.params

    let resultado =  expressao(Number(n1), Number(n2))
    res.send(resultado)
})