/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


const output = document.querySelector('#sum-numbers')

// Fatto con for
const promptLimit = 5;
let sumNumFor = 0;

for(i = 0; i < promptLimit; i++){

  let userImput;
  while(isNaN(userImput)){
    userImput = parseInt(prompt(`Inserisci per ${5 - i} volte un numero`));
  }
  sumNumFor += userImput;

  console.log('Numero inserito', userImput);
  console.log('Somma parziale', sumNumFor);

}
console.log('Il totale è ', sumNumFor);


// Fatto con while
let sumNumWhile = 0;
let counter = 0;

while(counter < promptLimit){
  
  let userImput;
  while(isNaN(userImput)){
    userImput = parseInt(prompt(`Inserisci per ${5 - counter} volte un numero`));
  }

  counter++;
  sumNumWhile += userImput;

  console.log('Numero inserito', userImput);
  console.log('Somma parziale', sumNumWhile);
}
console.log('Il totale è ', sumNumWhile);


// IL PRIMO OUTPUT SI GENERA SOLO QUANDO L'ULTIMO VALORE NON E' UN NUMERO...
// if(isNaN(userImput)){
//   output.innerHTML = 'In almeno una richiesta non hai inserito un numero...';
// }else if(!isNaN(userImput)){
//   output.innerHTML = `La somma dei tuoi numeri è: ${sumNumbers}`; 
// }
