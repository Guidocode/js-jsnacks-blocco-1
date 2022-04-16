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


let numeroDisp;

let num;

for(i = 0; i < promptLimit; i++){
  num = parseInt(prompt('Inserisci un numero'));
  console.log(num);

  numeroDisp = false;

  if(num % 2 !== 0){
    numeroDisp = true;
    numDispari.push(num)
  }

  console.log(numeroDisp);

  
}

// IN CONSOLE FUNZIONA
// L'OUTPUT VIENE STAMPATO NEL MODO CORRETTO SOLO QUANDO L'ULTIMO NUMERO INSERITO E' DISPARI

if(numeroDisp){
  output.innerHTML = `Tra i numeri che hai inserito questi sono dispari: ${numDispari}`;
}else{
  output.innerHTML = `Non hai inserito numeri dispari...`;
}

console.log(numDispari);
