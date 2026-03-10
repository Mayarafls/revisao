import { mult } from "./aritmetico/multiplicacao.js";
import { soma } from "./aritmetico/soma.js";
import { divisao } from "./aritmetico/divisao.js";
import { buscaPorNome } from "./vetor/busca.js";
import { mod } from "./aritmetico/mod.js";
import { potencia } from "./aritmetico/potencia.js";
import { subtracao } from "./aritmetico/subtracao.js"
import { expressao } from "./aritmetico/expressao.js"
import { ifBasico } from "./condicao/basico.js"
import { ifComposto } from "./condicao/composto.js";
import { ifSimples } from "./condicao/simples.js";
import { ternario } from "./condicao/ternario.js";
import express from 'express'

const app = express()


app.get('/buscarNome', (req, res) => {
    let nomes =["Mayara", "Ana","Andre"] // nomes chumbados1
    let nomeBuscado = buscaPorNome(nomes)
    res.json(nomeBuscado)
})


app.get('/soma', (req,res) => {
    let n1 = 20
    let n2 = 15
    let resultado =  soma(n1, n2)//funcao + parametros
    res.send(resultado)
})

app.get('/mult', (req,res) => {
    let n1 = 20
    let n2 = 15
    let resultado =  mult(n1, n2)
    res.send(resultado)
})


app.get('/divisao', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = divisao(n1, n2)
    res.send(resultado)
})


app.get('/mod', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = mod(n1, n2)
    res.send(resultado)
})


app.get('/potencia', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = potencia(n1, n2)
    res.send(resultado)
})

app.get('/subtracao', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = subtracao(n1, n2)
    res.send(resultado)
})

app.get('/expressao', (req,res) => {
    let n1 = 10
    let n2 = 2
    let resultado = expressao(n1, n2)
    res.send(resultado)
})

app.get('/ifBasico', (req,res) => {
    let idade = 10
    let resultado = ifBasico(idade)
    res.send("resultado no console")
})

app.get('/ifComposto', (req,res) => {
    let nota = 10
    let resultado = ifComposto(nota)
    res.send("resultado no console")
})

app.get('/ifSimples', (req,res) => {
    let letra = "x"
    let resultado = ifSimples(letra)
    res.send("resultado no console")
})

app.get('/ternario', (req,res) => {
    let num = 4
    let resultado = ternario(num)
    res.send("resultado no console")
})

app.get('/somatoria', (req, res) => {
    let caracteres = ["M","A","Y"," = ", "Y", "A", "Y", "A"] // nomes chumbados1
    let nome = buscaPorNome(nome)
    res.json(nome)
})

app.listen(3000, ()=> {
    console.log("Server Rodando na porta 3000")
})