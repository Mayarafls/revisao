import { mult } from "../services/operadores/aritmetico/multiplicacao.js";
import { soma } from "../services/operadores/aritmetico/soma.js";
import { divisao } from "../services/operadores/aritmetico/divisao.js";
import { mod } from "../services/operadores/aritmetico/mod.js";
import { potencia } from "../services/operadores/aritmetico/potencia.js";
import { subtracao } from "../services/operadores/aritmetico/subtracao.js"
import { expressao } from "../services/operadores/aritmetico/expressao.js"

describe("operadores aritmeticos", ()=> {

    test("Testar a função de somar", ()=> {
        // expectativa de retorno 15
        let resultado= soma(10, 5)
        expect(resultado).toBe(15)
    } )
    
    test("Testar a função de subtrair", ()=> {
        let resultado= subtracao(10, 5)
        expect(resultado).toBe(5)
    } )
    
    test("Testar a função de multiplicacao", ()=> {
        let resultado= mult(10, 5)
        expect(resultado).toBe(50)
    } )
    
    test("Testar a função de divisao", ()=> {
        let resultado= divisao(10 ,5)
        expect(resultado).toBe(2)
    } )
    
    test("Testar a função de potencia", ()=> {
        let resultado= potencia(10 ,2)
        expect(resultado).toBe(100)
    } )

    test("Testar a função de mod", ()=> {
        let resultado = mod(20,2)
        expect(resultado).toBe(0)
    })

    test("Testar a função de expressão", ()=> {
        let resultado = expressao(15,2)
        expect(resultado).toBe(28)
    })
})