/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


const output = document.querySelector('#sum-numbers')

const promptLimit = 5;
let sumNumbers = 0;
let userImput;

// Fatto con for
for(i = 0; i < promptLimit; i++){
  userImput = parseInt(prompt('Inserisci un numero'));
  sumNumbers += userImput;

  console.log(sumNumbers);
}

/*
// Fatto con while
let i = 0;

while(i < promptLimit){
  userImput = parseInt(prompt('Inserisci un numero'));
  sumNumbers += userImput;
  i++;
}
*/

// IL PRIMO OUTPUT SI GENERA SOLO QUANDO L'ULTIMO VALORE NON E' UN NUMERO...
if(isNaN(userImput)){
  output.innerHTML = 'In almeno una richiesta non hai inserito un numero...';
}else if(!isNaN(userImput)){
  output.innerHTML = `La somma dei tuoi numeri è: ${sumNumbers}`; 
}
