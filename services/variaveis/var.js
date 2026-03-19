// var =  Variavel de escorpo global, arriscada por ser global e obsoleta atualmente.

/*
Um retângulo tem base b e altura h. Escreva a expressão que representa a área desse retângulo.
*/

export function variavelVar(b, h) {
    var area = b*h;
    var msg = `Um retângulo com base ${b} e altura ${h}, tem a area igual a: ${area}`;
    console.log(msg);
    return msg;
}