

const entradaTarefa = document.querySelector('#tarefa');
const btnAddTarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');

function carregaMonitoresDeEventos(){

    document.addEventListener('DOMContentLoaded', recuperaTarefas);

    btnAddTarefa.addEventListener('click', adicionarTarefa);

}
carregaMonitoresDeEventos();

function recuperaTarefas(evento){

    let tarefas = localStorage.getItem('tarefas');

    if(tarefas == null){
        tarefas = [];
    }

    tarefas = JSON.parse(tarefas);

    tarefas.forEach(function(tarefa){

        const li = document.createElement('li');
        li.className = 'collection';
        li.appendChild(document.createTextNode(tarefa));

        listaDeTarefas.appendChild(li);
    });
}

function filtrar(evento){

    const procurado = evento.target.value.toLowerCase();

    const tarefas = document.querySelectorAll('.collection');

    tarefas.forEach(function(tarefa){

        textoTarefa = tarefa.innerText;

    });
}


function adicionarTarefa(evento){
    evento.preventDefault();

    if( entradaTarefa.value === '' ){
        alert('Entre com uma tarefa');
        return false;
    }



    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    listaDeTarefas.appendChild(li);

    gravarTarefa(entradaTarefa.value);


    entradaTarefa.value = '';
}

function gravarTarefa(tarefa){

    let tarefas = [];


    let tarefaDoStorage = sessionStorage.getItem('tarefas');

    if( tarefaDoStorage != null ){

        tarefas = JSON.parse(tarefaDoStorage);
    }

    //Adiciona a tarefa ao JSON já existente
    tarefas.push(tarefa);

    //Grava o novo JSON no localStorage
    sessionStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function allowDrop(ev) {

    ev.preventDefault(); 

}

function drag(ev) 
{
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
}