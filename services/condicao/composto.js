/*
Crie um programa que receba a nota de um aluno. Se a nota for maior ou igual a 7, informe que ele está aprovado; se for maior ou igual a 5 e menor que 7, informe que está em recuperação; caso contrário, informe que está reprovado.
*/

export function ifComposto(nota){
    if (nota >= 7){
        console.log("aprovado")
        return "aprovado"
    } else if (nota  >= 5 && nota < 7 ){
        console.log("recuperação")
        return "recuperação"
    } else {
        console.log("reprovado")
        return "reprovado"
    }

}


