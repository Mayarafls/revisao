import express from "express";
export const router_condicoes = express.Router();

import { ifBasico } from "../services/condicao/basico.js";
import { ifComposto } from "../services/condicao/composto.js";
import { ifSimples } from "../services/condicao/simples.js";
import { ternario } from "../services/condicao/ternario.js";

router_condicoes.post("/ifBasico", (req, res) => {
  let idade = req.body.idade;
  let resposta= {
     resultado: ifBasico(idade)
  }
  res.json(resposta);
});

router_condicoes.post("/ifComposto", (req, res) => {
  let nota = req.body.nota;
  let resposta = {  
      resultado: ifComposto(nota)
  }
  res.json(resposta);
});

router_condicoes.post("/ifSimples", (req, res) => {
  let letra = req.body.letra;
  let resposta = {
    resultado: ifSimples(letra)
  }
  res.json(resposta);
});

router_condicoes.post("/ternario", (req, res) => {
  let num = req.body.num;
  let resposta = {
  resultado : ternario(num)
  }
  console.log(resposta)
  res.json(resposta);
});