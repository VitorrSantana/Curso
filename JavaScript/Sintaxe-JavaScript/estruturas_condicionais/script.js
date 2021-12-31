/* var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 !=-1 ? console.log('Os jogadores são validos'): console.log('Os jogadores são invalidos') ;

if (jogador1 > 0 && jogador2 == 0 ){
    console.log('Jogador 1 marcou ponto')
    placar = jogador1 > jogador2
}else if (jogador2 > 0 && jogador1 == 0 ){
    console.log('Jogador 2 marcou ponto')
    placar = jogador2 > jogador1
}else{
    console.log('Ninguém marcou ponto')
}

switch (placar){

    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
    break
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
    break
    default:
        console.log('Ficou empatado')
    break;


} */

let array  = [1,2,3,4,5]
var object = { prop1: 'valor1',
               prop2: 'valor2',
               prop3: 'valor3'
             }
// for -> Executa uma instrução até que a condição seja falsa
/* for(let i=0; i<array.length;i++){
    console.log(i)
} */

// for in -> Percorre todos os indices do array a partir de uma propriedade
// com array
/* for (let i in array){
    console.log(i)
}

//com object
for (i in object){
    console.log(i)
} */

// for of -> Percorre todos os valores do array 
// for (let i of array){
//     console.log(i)
// }

var a = 0;

while (a<10){
    console.log(a);
    a++;
}