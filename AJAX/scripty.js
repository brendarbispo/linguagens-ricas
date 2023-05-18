//executar a funcao anoninama depois que toda a pagina for carregada
window.onload = function () {
    let url = "http://api.openweathermap.org/data/2.5/weather?";

    let minhaAPI = "cdcbe49c0690b55676ff61001597b362";
    let resultado;
    let cidade;

    cidade.onchange = function () {

        //criando o objeto AJAX dependendo do navegador

        let ajax = null;

        //se o navegador existir o XMLHttpRequest(), ele cria por essa metodologia
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
            //se no navegador nao existir ele usa ActivXObject

        } else if(window.ActiveXObject){
            ajax =  new ActiveXObject("Msxml2.XMLHTTP");
        }
        
        cidade = cidade.value;

        if(cidade!=0){
            //abre a pagina via GET

            ajax.open("GET", url + 'appid=' + minhaAPI +'&q='+cidade+'&units=metric&lang=pt', true);
            //nao envia nada

            ajax.send(null)
            //tenta indentificar o estado do carregamento do conteudo
            ajax.onreadystatechange = function(){
                //verifica se o conteudo já chegou no navegador
                if(ajax.readyState == 4){
                    //verifica se o conteudo já chegou na pagina
                    if(ajax.status == 200){
                        //console.log(ajax.responseText);
                        resultado = JSON.parse(ajax.responseText);
                        console.log(resultado);
                        console.log(resultado.name);
                        console.log(resultado.main.temp_min);
                        console.log(resultado.main.temp_max);
                        console.log(resultado.weather[0].description);

                    }
                }
            }
        }
    }
}