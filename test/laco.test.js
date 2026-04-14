import { doWhile } from "../services/laco/doWhile.js";
import { forLoop } from "../services/laco/for.js";
import { forEach } from "../services/laco/forEach.js";
import { map } from "../services/laco/map.js";
import { whilE } from "../services/laco/while.js";

describe ("Laços de Repetição", () => {
    test("Do While", () => {
        expect(doWhile(5)).toEqual([5, 4, 3, 2, 1, 0]);
    });

    test("For Loop", () => {
        expect(forLoop([1,21,3,23,15])).toEqual(63);
    });

    test("For Each", () => {
        expect(forEach(["Mayara", "Ana", "Andre"])).toBe(`Bem vindo Mayara;Bem vindo Ana;Bem vindo Andre;`);
    }); 

    test("Map", () => {
        expect(map([1,2,3,4,5])).toEqual([1,4,9,16,25]);
    });

    test("While", () => {
        expect(whilE(1)).toBe("1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; ");
    });
});