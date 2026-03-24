import express from 'express'
const app = express()

app.use(express.json())

import {router_aritmeticos} from "./routers/operadores/router_aritmeticos.js";
import {router_logicos} from "./routers/operadores/router_logicos.js";

import {router_variaveis} from "./routers/router_variaveis.js";
import {router_condicoes} from "./routers/router_condicoes.js";
import {router_vetor} from "./routers/router_vetor.js";
import {router_switch} from "./routers/router_switch.js";
import {router_json} from "./routers/router_json.js";
import {router_lacos} from "./routers/router_lacos.js";

app.use('/operadores/aritmeticos', router_aritmeticos)
app.use('/operadores/logicos', router_logicos)

app.use('/condicoes', router_condicoes)
app.use('/variaveis', router_variaveis)
app.use('/vetor', router_vetor)
app.use('/switch', router_switch)
app.use('/json', router_json)
app.use('/lacos', router_lacos)

app.listen(3000, ()=> {
    console.log("Server Rodando na porta 3000")
})