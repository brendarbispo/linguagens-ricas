/*var pesoTotal = 0;

function allowDrop(ev)
{

    ev.preventDefault();

}

function drag(ev)
{

    ev.dataTransfer.setData("text",ev.target.id);
}
function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));


// adicionar ou subtrair o peso da imagem ao peso total

    if(ev.target.id === "div2"){

        pesoTotal += parseInt(ev.target.childNodes[0].getAttribute("data-peso"));

    }else if(ev.target.id === "div1"){
        pesoTotal -= parseInt(ev.target.childNodes[0].getAttribute("data-peso"));

    }
}

//Exibir o peso total na pagina

document.getElementById("pesoTotal").innerHTML = pesoTotal + "kg";

function dragEnd(ev){

    if(ev.target.parentNode.id != "div2"){

        //Subtrair o peso da imagem ao peso Total
        pesoTotal -= parseInt(ev.target.getAttribute("data-peso"));

    } else if(ev.target.parentNode.id === "div2"){

        pesoTotal += parseInt(ev.target.getAttribute("data-peso"));
    }
        //Exibir o peso total na pagina
        document.getElementById("pesoTotal").innerHTML = pesoTotal + "kg";
    }
*/
let pesoTotal = 0;


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


// Adicionar ou subtrair o peso da imagem ao peso total

if(ev.target.id === "div2")
{
    console.log('aqui')
    pesoTotal += parseInt(event.target.childNodes[0].getAttribute("data-peso"));

}else if(ev.target.id ==="div1"){

    console.log('aqui2')
    pesoTotal -= parseInt(event.target.childNodes[0].getAttribute("data-peso"));

}         
//Exibir o peso total na página
document.getElementById("pesoTotal").innerHTML = pesoTotal + "Kg";        
}

function dragEnd(ev){

    if(ev.target.parentNode.id != "div2"){
        //Subtrair o peso da imagm ao peso total
        pesoTotal -= parseInt(ev.target.getAttribute("data-peso"));

        //Exibir o peso total na pagina
        document.getElementById("pesoTotal").innerHTML = pesoTotal + "Kg";

    }else if(ev.target.parentNode.id != "div1"){

        pesoTotal += parseInt(ev.target.getAttribute("data-peso"));
    }
     
    }