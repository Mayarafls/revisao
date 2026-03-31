
/*
Crie um programa que receba um número de 1 a 7 representando o dia da semana. Utilize a estrutura switch para exibir o nome do dia correspondente (por exemplo, 1 para domingo, 2 para segunda-feira, e assim por diante). Caso o número informado não esteja entre 1 e 7, exiba uma mensagem de dia inválido.
*/
export function semana(dia) {
  let resposta = parseInt(dia)
  switch (resposta) {
      case 1:
        return 'Domingo';
        break;
      case 2:
        return 'Segunda-feira';
        break;
      case 3:
        return 'Terça-feira';
        break;
      case 4:
        return 'Quarta-feira';
        break;
      case 5:
        return 'Quinta-feira';
        break;
      case 6:
        return 'Sexta-feira';
        break;
      case 7:
        return 'Sábado';
        break;
      default:
        return 'Dia inválido!';
    }
  }