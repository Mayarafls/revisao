import express from 'express';
export const router_lacos = express.Router();

import { forLoop } from '../services/laco/for.js';
import { doWhile } from '../services/laco/doWhile.js';
import { forEach } from '../services/laco/forEach.js';
import { map } from '../services/laco/map.js';
import { whilE } from '../services/laco/while.js';


router_lacos.get('/for', (req, res) => {
    const number = [1, 21, 3, 23, 15]
    res.send(`A soma dos números é: ${forLoop(number)}`)
})

router_lacos.get('/doWhile', (req, res) => {
    const number = 100
    doWhile(number)
    res.send(`Números printados no console.`)
})

router_lacos.get('/forEach', (req, res) => {
    const alunos = ["Ana", "Mayara", "Yaya", "Bacelli"]
    forEach(alunos)
    res.send(`Nomes printados no console.`)
})

router_lacos.get('/map', (req, res) => {
    const numers = [1, 2, 3, 4, 5, 6]
    res.send(`O quadrado dos números é: ${map(numers)}`)
})

router_lacos.get('/while', (req, res) => {
    const contador = 1
    whilE(contador)
    res.send(`Números printados no console.`)
})