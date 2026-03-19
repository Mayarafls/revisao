/*
Desenvolva um programa que leia 5 números e calcule a soma deles utilizando um laço.
*/

export function forLoop(number) {

    //number = [1,21,3,23,15]
    let soma = 0

    for (let index = 0; number.length > index; index++) {
 
        soma += number[index]
    }

    return soma
}