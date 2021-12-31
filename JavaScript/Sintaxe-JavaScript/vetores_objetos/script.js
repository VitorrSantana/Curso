// Arrays ou vetores 

// let array = [1,2,3,4];

// for each
// array.forEach(function(item,indice){console.log(item,indice)})

// push -> Adiciona um item no final do array
// array.push('novo Item no Final do Array')
// console.log(array)

// pop -> Retira um item do final do array
// array.pop()
// console.log(array)

// shift -> Retira um item do inicio do array
// array.shift()
// console.log(array)

// unshift -> Adiciona um item no inicio do array
// array.unshift(1)
// console.log(array)

// indexOf -> Retorna o indice de um item no array
// console.log(array.indexOf(4))

// splice -> Remove ou Subistitui um item pleo índice
//array.splice(0,2)
//console.log(array)

// slice -> Retorna uma parte de um array já existente
// let novoArray = array.slice(0,2)
// console.log(novoArray)

// Objetos -> Possuem propriedades e valores
let object = { string:'vitor',
               number:1,
               boolean:true,
               array: [1,2,3]
             }
console.log(object)

// Desestruturação de Objeto
var string = object.string

var {string,number,boolean} = object;
console.log(number)