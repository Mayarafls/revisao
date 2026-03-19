import express from "express";
export const router_condicoes = express.Router();

import { ifBasico } from "../services/condicao/basico.js";
import { ifComposto } from "../services/condicao/composto.js";
import { ifSimples } from "../services/condicao/simples.js";
import { ternario } from "../services/condicao/ternario.js";

router_condicoes.get("/ifBasico", (req, res) => {
  let idade = 10;
  let resultado = ifBasico(idade);
  res.send("resultado no console");
});

router_condicoes.get("/ifComposto", (req, res) => {
  let nota = 10;
  let resultado = ifComposto(nota);
  res.send("resultado no console");
});

router_condicoes.get("/ifSimples", (req, res) => {
  let letra = "x";
  let resultado = ifSimples(letra);
  res.send("resultado no console");
});

router_condicoes.get("/ternario", (req, res) => {
  let num = 4;
  let resultado = ternario(num);
  res.send("resultado no console");
});