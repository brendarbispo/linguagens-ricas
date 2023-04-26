
// Variaveis para cor,fundo e nome
var vcorfundo, vcorfonte, vnome


// Função para definir a cor, foi utilizado o "if e o else" 

function defineCor(op,cor){
    // se op for igual a 1 alterna a cor de fundo

    if(op==1){
        document.body.style.backgroundColor=cor
        vcorfundo = cor
    }else{
        document.body.style.color=cor
        vcorfonte =  cor
    }
}


function gravar(){

    var form = document.getElementById("fconf");

    //armazena o nome entrando no formulario na variavel vnome
    vnome = document.getElementById('fnome').value;

    //armazenando as informaçoes no localStorage

    localStorage.corfundo = vcorfundo
    localStorage.cortexto = vcorfonte
    localStorage.nome = vnome

    form.style.display="none";
}

//para finalziar, vai no formulario, no input do botao

function mostrarOpcoes(){
    //chamando o formulario 'Opcoes'

   form = document.getElementById("fconf");
   form.style.display="block";


}

function inicia(){

    if(localStorage.nome){
    //se esse if for true, significa q o localStorage já existe

    vcorfundo = localStorage.corfundo;
    vcorfonte = localStorage.cortexto;
    vnome = localStorage.nome;

    //chamando função defineCor

    defineCor(1,vcorfundo);
    defineCor(2,vcorfonte);

    document.getElementById("painel").innerHTML="Bem Vindo! " + vnome + "<hr>";

    }

}


window.addEventListener("load", inicia);