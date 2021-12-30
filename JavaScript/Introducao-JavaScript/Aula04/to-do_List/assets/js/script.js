// Variaveis utilizadas para realizar a atividade
const listCheckBox = document.getElementById('checkboxs');
const adicionar = document.getElementById('adicionar');

adicionar.addEventListener('click',function(e){

    e.preventDefault();
    const input = document.getElementById('input_tarefa');
    adicionarElemento(input);
});

function adicionarElemento(input){
    var text = String(input.value);
    if(text.length>0){
        criarElemento(input);
    }
}

function criarElemento(input){
    
    const conteudo = document.createElement('div');
    const novoCheckBox = document.createElement('input');
    const label = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(input.value); 

    novoCheckBox.setAttribute('type', 'checkbox');
    novoCheckBox.setAttribute('name', input.value);
    novoCheckBox.setAttribute('id', input.value);

    label.setAttribute('for',input.value);
    label.appendChild(taskDescriptionNode);


    conteudo.classList.add('task-item');
    conteudo.appendChild(novoCheckBox);
    conteudo.appendChild(label);

    listCheckBox.appendChild(conteudo);
    
}


