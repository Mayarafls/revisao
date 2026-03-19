import express from 'express';
export const router_vetor = express.Router();

import { buscaPorNome } from "../services/vetor/busca.js";
import { somatoria } from "../services/vetor/somatoria.js";

router_vetor.get("/buscarNome", (req, res) => {
    let nomes =["Mayara", "Ana","Andre"] // nomes chumbados1
    let nomeBuscado = buscaPorNome(nomes)
    res.json(nomeBuscado)
})

router_vetor.get("/somatoria", (req, res) => {
    let caracteres = ["M","A","Y"," = ", "Y", "A", "Y", "A"] // nomes chumbados1
    let nome = somatoria(caracteres)
    res.json(nome)
})