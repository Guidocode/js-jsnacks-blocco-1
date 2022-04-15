/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/


const num = '2222';

console.log(num.length);







// const numLimit = (prompt('Inserisci un numero'));


/*
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
const johnNash = document.querySelector('.john-nash');

if(!isNaN(numLimit)){
  output.innerHTML = 
  `Stampo il cubo dei primi ${numLimit} numeri`;  
}else{
  output.innerHTML = `Non hai inserito un numero...`;
  johnNash.classList.add('active');
}
*/