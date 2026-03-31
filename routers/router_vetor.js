import express from 'express';
export const router_vetor = express.Router();

import { buscaPorNome } from "../services/vetor/busca.js";
import { somatoria } from "../services/vetor/somatoria.js";

router_vetor.post("/buscarNome", (req, res) => {
    let nomes = req.body.nomes;
    let resposta = {
        resultado : buscaPorNome(nomes)
    }
    res.json(resposta)
})

router_vetor.post("/somatoria", (req, res) => {
    let caracteres = req.body.caracteres
    let resposta = {
        resultado : somatoria(caracteres)
    }
    res.json(resposta)
})