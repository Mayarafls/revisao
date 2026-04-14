import { diferente } from "../services/operadores/relacionais/diferente.js";
import { igual } from "../services/operadores/relacionais/igual.js";
import { maior } from "../services/operadores/relacionais/maior.js";
import { maiorIgual } from "../services/operadores/relacionais/maiorIgual.js";
import { menor } from "../services/operadores/relacionais/menor.js";
import { menorIgual } from "../services/operadores/relacionais/menorIgual.js";

describe("Operadores Relacionais", () => {
    test("Diferente", () => {
        expect(diferente(3)).toBe("Numero é diferente de 2");
        expect(diferente(2)).toBe("Numero é 2");
    });

    test("Igual", () => {
        expect(igual(2)).toBe("Numero é 2");
        expect(igual(5)).toBe("Numero não é 2");
    }
    );

    test("Maior", () => {
        expect(maior(5)).toBe("Numero maior que 1");
        expect(maior(0)).toBe("Numero menor que 1");
    });
    
    test("Maior ou Igual", () => {
        expect(maiorIgual(1)).toBe("Numero maior ou igual a 1");
        expect(maiorIgual(0)).toBe("Numero menor que 1");
    });

    test("Menor", () => {
        expect(menor(22)).toBe("Numero  menor que 23");
        expect(menor(25)).toBe("Numero maior que 24");
    });
    
    test("Menor  Igual", () => {
        expect(menorIgual(1)).toBe("Numero menor ou igual a 1");
        expect(menorIgual(2)).toBe("Numero maior que 1");
    });

});