/*
Uma loja vende camisetas por R$ 25 cada. Represente por x a quantidade de camisetas vendidas e escreva a expressão que representa o valor total arrecadado.
*/

export function variavelLet(x) {
    let resultado = x*25;
    let msg = `O total arrecadado com as ${x} camisetas será ${resultado}`;
    return msg;
}

