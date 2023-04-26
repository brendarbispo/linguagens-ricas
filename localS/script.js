

let nome = window.prompt('Entre com seu nome:');
let endereco = window.prompt('Escreva o endereço:');
let cpf = window.prompt('Entre com seu CPF:');
let numDependentes = window.prompt('Qual a quantidade de dependentes:');

//***Vamos chamar o localStorage. Ele vem do window. No caso
//***vamos usar o setItem

//window.localStorage.setItem("Nome", nome);

//***Podemos escrever de uma maneira mais curta tbm::

localStorage.setItem("Nome", nome);
localStorage.setItem("Endereco", endereco);
localStorage.setItem("CPF", cpf);
localStorage.setItem("Dependentes", numDependentes);

//Para recuperar o valor armazenado em uma key do localStorage, usamos o getItem:

//alert(localStorage.getItem("Nome");

//Se ao inves de apresentar a key em uma janela alert, quiser apresentar
// a pagina

//alert(localStorage.getItem("Nome"));

//Ultilize o mesmo procedimento e crie variaveis para endereco, CPF,
//num de dependentes.

document.write("Olá " + nome + ", seu endereço é " + endereco + ", CPF inserido é " + cpf + " e o numero de dependentes é " + numDependentes);
