
addEventListener('message', function(event){
    //recebe o input
    const inputNum1 = event.data;

    //calcula
    const quadrado = inputNum1 ** 2

    this.postMessage(quadrado);
})

