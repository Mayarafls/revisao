// pega um array e devolve todo ao quadrado

export function map(numers) {
    let quadrado = numers.map((num) => num * num)
    return quadrado
}

console.log(map([1,2,3,4,5]))