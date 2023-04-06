

worker1 = new Worker('worker1.js');
worker2 = new Worker('worker2.js')

//webWorks nunca aparecem no js

function calcularQuadrado()
{
    worker1.postMessage(Number(document.getElementById("inputNum1").value));

}

worker1.addEventListener('message', function(event){
    const quadrado = event.data;
    document.getElementById('res1').textContent = 'O quadrado do numero digitado é ' + quadrado;
})

function calcularFatorial()
{
    worker2.postMessage(Number(document.getElementById("inputNum2").value));

}

worker2.addEventListener('message', function(event){
    const num = event.data;
    document.getElementById('res2').textContent = 'O fatorial do numero digitado é ' + input;

})