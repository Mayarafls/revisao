/*
Crie um programa que exiba os números de 1 a 10 utilizando um laço de repetição.
*/

export function whilE(contador) {
    let dados = []
    let i = 0
    while(i <= 10){
        dados+=contador+i+"; "
        i++
        
        
    }
    return dados
}

console.log(whilE(1))
