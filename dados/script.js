

//Funcao que altera a cor do fundo ou do texto. Ela recebe uma operacao
//e uma cor. A operacao é para definir se eka vai alterar a cor de fundo ou texto

let vCorFundo ;
let vCorTexto ;
let vNome ;
function defineCor(op, cor){
    //se `op` for == 1, alterar a cor do fundo, se for == a 2, alterar a cor do texto

    if(op == 1){
        document.body.style.backgroundColor=cor;
        //armazenar a cor dentro da variavel
        vCorFundo=cor;

    }else{
        document.body.style.color=cor;
        vCorTexto=cor;
    }
}

function Gravar(){
    //armazenamos o nome entrado no formulario na var vNome
    vNome=document.getElementById("fnome").value;

    //armazenamos as infos no localStorage
    localStorage.corfundo=vCorFundo;

    localStorage.cortexto=vCorTexto;

    localStorage.nome=vNome;
}

//para finalizar, vai no form, no input do botao e no onclick
//chama a funcao gravar()

