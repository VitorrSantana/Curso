function retornaValoresPares(array){
    let numPares = [];
    for(let i=0;i<array.length;i++){
        if(array[i] % 2 === 0){
            numPares.push(array[i]);
        }
    }
    return numPares;
}

let valores = [1,2,3,4,5,6,7,8,9,10];
console.log(retornaValoresPares(valores));