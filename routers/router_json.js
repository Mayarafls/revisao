import express from 'express';
export const router_json = express.Router();

import { casa } from '../services/json/json.js';

router_json.get('/visualizar', (req, res) => {
    const resultado = casa;
    res.json(resultado);
});