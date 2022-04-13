/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/


const numDispari = [];
const promptLimit = 6;
console.log(numDispari);

const output = document.querySelector('#numero');

for(i = 0; i < promptLimit; i++){
  const num = parseInt(prompt('Inserisci un numero'));
  console.log(num);

  if(num % 2 !== 0){
    numDispari.push(num)
    output.innerHTML = `Tra i numeri che hai inserito questi sono dispari: ${numDispari}`;
  }else if(num % 2 === 0){
    output.innerHTML = `Non hai inserito numeri dispari...`;
  }
}


