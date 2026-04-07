import { logicoE } from '../services/operadores/logicos/e.js';
import { logicoOu } from '../services/operadores/logicos/ou.js';
import { logicoNot } from '../services/operadores/logicos/not.js';

describe("Operadores logicos", ()=> {
    test("Lógico e", ()=> {
        expect(logicoE(2)).toBe(true)
    })

    test("Lógico ou", ()=> {
        expect(logicoOu(2)).toBe(true)
    })

    test("Lógico not", ()=> {
        expect(logicoNot(true)).toBe(false)
    })
})