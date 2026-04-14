import { semana } from "../services/switch/switch.js";
describe("Teste do Switch", () => {
    test("Teste do dia da semana", () => {
        expect(semana(1)).toBe("Domingo");
        expect(semana(2)).toBe("Segunda-feira");
    });
});