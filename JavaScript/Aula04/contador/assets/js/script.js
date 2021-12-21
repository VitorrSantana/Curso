// Variaveis utilizadas para realizar a atividade
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

// Desafio 1: Usando o addEvenListener
/*
var adicionar = document.getElementById('button2');
var subtrair = document.getElementById('button1');

adicionar.addEventListener("click",increment);
subtrair.addEventListener("click",decrement);
*/

// Desafio 2: Se o número for negativo coloca ele com a cor vermelha
function verificaNumero(){
    if(currentNumber<0){
        currentNumberWrapper.style.color = 'red'
    }
    else{
        currentNumberWrapper.style.color = 'black'
    }
}

// Função para incrementar o número do contador
function increment(){
    if(currentNumber<10){ // Desafio 3: Limita a contagem até 10
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
    verificaNumero();
}

// Função para decrementar o número do contador
function decrement(){
    //if(currentNumber>0){ // Desafio 3: N deixa o número ser negativo
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    //}

    verificaNumero();
}

// Adicionando um evento de reset com AddEvenList
var reset = document.getElementById('button3');
reset.addEventListener('click',resetaValor);

function resetaValor(){
    currentNumberWrapper.innerHTML = 0;
    currentNumberWrapper.style.color = 'black'
}

