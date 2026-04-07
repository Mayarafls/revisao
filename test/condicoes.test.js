
import { ifBasico } from "../services/condicao/basico.js";
import { ifComposto } from "../services/condicao/composto.js";
import { ifSimples } from "../services/condicao/simples.js";
import { ternario } from "../services/condicao/ternario.js";

describe("Testes das condicções", ()=> {
    test("Teste do IfBásico", ()=> {
        expect(ifBasico(18)).toBe("maior de idade")
    })

    test("Teste do ifComposto", ()=> {
        expect(ifComposto(6)).toBe("recuperação")
    })

    test("Teste do ifSimples", ()=> {
        expect(ifSimples("a")).toBe("existe")
    })

    test("Teste do ternario", ()=> {
        expect(ternario(56)).toBe("par")
    })
})