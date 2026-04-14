
export function doWhile(numero) {
    let resultado = []
    let b = numero - 5 // Define o limite inferior baseada na entrada
    
    do {
        resultado.push(numero)
        numero = numero - 1
    } while (numero >= b) 
    
    return resultado
}

// RESPOSTA =   [4, 3, 2, 1, 0]