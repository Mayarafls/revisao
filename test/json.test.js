import {casa} from '../services/json/json.js'

describe("Json", () => {
    test("Json", () => {
        expect(casa).toEqual([
             {
        id: 1,
        nome: "Geladeira",
        objetivo: "guardar alimento",
        cor: "cinza",
        material: "inox"
    },
    {
        id: 2,
        nome: "Porta",
        objetivo: "Divisoria de cômodos",
        cor: "marrom",
        material: "madeira"
    },
    {
        id: 3,
        nome: "Fogão",
        objetivo: "cozinhar",
        cor: "branco",
        material: "aluminio"
    },
    {
        id: 4,
        nome: "Cama",
        objetivo: "dormir",
        cor: "marrom",
        material: "madeira"
    },
    {
        id: 5,
        nome: "Vassoura",
        objetivo: "varrer",
        cor: "marrom",
        material: "madeira"
    }
        ])
    })
})