/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/


// const n1 = 5;
// const n2 = 8;

const n1 = parseInt(prompt('Inserisci un numero'));
const n2 = parseInt(prompt('Inserisci un altro numero'));

// if(isNaN(n1)){
//   alert('Inserisci un valore numerico');
// }else if (isNaN(n2)){
//   alert('Inserisci un valore numerico');
// }

const output = document.querySelector('#num-maggiore');
console.log(output);

console.log(n1);
console.log(n2);

let nMaggiore;

if(n1 > n2){
  nMaggiore = n1;
}else if(n1 < n2){
  nMaggiore = n2;
}else{
  nMaggiore = 'I numeri sono uguali'
}

output.innerHTML = `Il numero maggiore è: ${nMaggiore}`; 