// busca um nome numa lista de nomes

export function buscaPorNome(nomezinho) {
    if(!Array.isArray(nomezinho)) {
        let msgErro = "Não é um vetor"
        return msgErro
    }
    let nomeBuscado = nomezinho.filter(nome => nome === "Mayara")
    return nomeBuscado
}

