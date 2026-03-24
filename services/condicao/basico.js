/*
Crie um programa que receba a idade de uma pessoa. Se a idade for maior ou igual a 18, informe que ela é maior de idade; caso contrário, informe que ela é menor de idade.
*/
export function ifBasico(idade){
    if (idade >= 18){
        console.log("maior de idade")
        return "maior de idade"
    } else {
        console.log("menor de idade")
        return "menor de idade"
    }

}

