/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/


// const n1 = 5;
// const n2 = 8;

const n1 = parseInt(prompt('Inserisci un numero'));
const n2 = parseInt(prompt('Inserisci un altro numero'));


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

if(isNaN(n1) || (isNaN(n2))){
  output.innerHTML = 'Non hai inserito un numero...';
}else{
  output.innerHTML = `Il numero maggiore è: ${nMaggiore}`; 
}


