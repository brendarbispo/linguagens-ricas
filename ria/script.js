function allowDrop(ev)
{
// função para permitir a arrastar

    ev.preventDefault();

}
//o parametro 'ev' é o objeto de evento que é passado á função allowDrop quando ela é chamada
//Essa função é usada para permitir que o elemento alvo da operaçao de arrastar e soltar receba o elemento arrastado.
//a função preventDefault impede a ação padrão do navegador que é a de nao deixar um elemento ser arrastado

function drag(ev)
{

    ev.dataTransfer.setData("text", ev.target.id);

    //dataTransfer =  transferencia de dados
    //dataTransfer é um objeto/method

}

function drop(ev) 
{

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

