export function logicoOu(n1) {
    let resposta;
    if (n1 < 2 || n1 > 2) {
        console.log("Numero não é 2");
        resposta = false;
    } else {
        console.log("Numero é 2");
        resposta = true;
    }
    return resposta;
}