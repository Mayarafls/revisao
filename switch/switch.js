/*
Crie um programa que receba um número de 1 a 7 representando o dia da semana. Utilize a estrutura switch para exibir o nome do dia correspondente (por exemplo, 1 para domingo, 2 para segunda-feira, e assim por diante). Caso o número informado não esteja entre 1 e 7, exiba uma mensagem de dia inválido.
*/

let dia = 1;

switch (dia) {
    case 1:
      console.log('Domingo');
      break;
    case 2:
      console.log('Segunda-feira');
      break;
    case 3:
      console.log('Terça-feira');
      break;
    case 4:
      console.log('Quarta-feira');
      break;
    case 5:
      console.log('Quinta-feira');
      break;
    case 6:
      console.log('Sexta-feira');
      break;
    case 7:
      console.log('Sábado');
      break;
    default:
      console.log('Dia inválido!');
  }