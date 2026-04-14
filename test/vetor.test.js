import { buscaPorNome } from "../services/vetor/busca.js";
import { somatoria } from "../services/vetor/somatoria.js";

describe("vetor", ()=> {
    
    test('buscar por nome', () => {
        const listaNomes = ['Mayara', 'João', 'Ana'];
        // Usamos toEqual porque estamos comparando arrays
        expect(buscaPorNome(listaNomes)).toEqual(['Mayara']);
      });


    test('somar caracteres', ( ) => {
        const caracter = ['Y','A','Y','A'];
        expect(somatoria(caracter)).toBe("YAYA")
    })   

})