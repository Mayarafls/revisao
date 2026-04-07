import { variavelLet } from "../services/variaveis/let.js";
import { constante } from "../services/variaveis/const.js";
import { variavelVar } from "../services/variaveis/var.js";

describe("variaveis", ()=> {
    
    test("variavel let", ()=> {
        expect(variavelLet(2)).toBe("O total arrecadado com as 2 camisetas será 50")
    })

    test("variavel const", ()=> {
        expect(constante(17)).toBe("Atualmente Ana tem 17 anos. Daqui a sete anos ela terá: 24")
    })

    test("variavel var", ()=> {
        expect(variavelVar(20,4)).toBe("Um retângulo com base 20 e altura 4, tem a area igual a: 80")
    })

})