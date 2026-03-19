// busca um nome numa lista de nomes

export function buscaPorNome(nomezinho) {
    let nomeBuscado = nomezinho.filter(nome => nome === "Mayara")
    console.log(nomeBuscado)
    return nomeBuscado
}

// let nomes = ["Mayara", "Ana","Andre"]

