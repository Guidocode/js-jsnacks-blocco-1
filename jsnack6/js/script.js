/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/



const numLimit = parseInt(prompt('Inserisci un numero'));

const container = document.querySelector('.gb-container');

console.log('numero inserito', numLimit);

let cubo;

for(i = 1; i <= numLimit; i++){
  
  // creo l'elemento da aggiungere
  const boxElement = document.createElement('div');
  // gli scrivo la classe
  boxElement.className = 'num-box';
  // aggiungo il contenuto 
  boxElement.append(i, ' al cubo = ');
  // stampo in console per vederlo
  // console.log(boxElement);
  console.log(i);

  cubo = Math.pow(i, 3)
  boxElement.append(cubo);
  console.log('cubo',cubo);

  container.append(boxElement);
}

const output = document.querySelector('#message-output');
const gatsby1 = document.querySelector('.gatsby-1');
const johnNash = document.querySelector('.john-nash');

if(!isNaN(numLimit)){
  output.innerHTML = 
  `Stampo il cubo dei primi ${numLimit} numeri`;  
}else{
  output.innerHTML = `Non hai inserito un numero...`;
  johnNash.classList.add('active');
}
