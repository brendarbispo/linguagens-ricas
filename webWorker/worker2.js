addEventListener('message', function(event){
    //recebe o input
    const input = event.data;

    //calcula
    if (input === 0 || input === 1)
    return 1;
  for (var i = input - 1; i >= 1; i--) {
    input *= i;
  }
  return input;

    this.postMessage(input);
})