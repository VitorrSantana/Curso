// Tipos primitivos

// boolean
var vouF = false;
console.log(typeof(vouF))

// number
var num = 1;
console.log(typeof(num))

//string
var nome = 'vitor';
console.log(typeof(nome))

// Declaração de variaveis 

// var   -> De escobo Global
var escopoGlobal = 'global'
// let   -> De escopo Local de bloco
function escopoBloco(){
    let escopoB = 'local'
}
// const -> Não pode ser alterada, e é de escopo local de bloco
const constante = 'nao muda'

// Atribuição: um sinal de igual é referente a atribuição
var atribuicao = 'vitor' 

// Comparação: compara se um valor é igual aou outro
var comparacao  = '0' == 0;
console.log(comparacao)

// Comparação Idêntica: compara o valor e o tipo se são iguais
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica)