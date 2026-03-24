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

router_vetor.get("/somatoria", (req, res) => {
    let caracteres = ["M","A","Y"," = ", "Y", "A", "Y", "A"] // nomes chumbados1
    let nome = somatoria(caracteres)
    res.json(nome)
})