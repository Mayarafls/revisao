// De bem vindo a todos os nomes


export function forEach(alunos) {
    let dados = []
    alunos.forEach(aluno => dados+= `Bem vindo ${aluno};`)
    return dados
}

