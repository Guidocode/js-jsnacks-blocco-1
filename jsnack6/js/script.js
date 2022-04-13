/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/



const numLimit = parseInt(prompt('Inserisci un numero'));
const output = document.querySelector('#numero');

let cubo;

console.log('numero inserito', numLimit);


for(i = 1; i <= numLimit; i++){
  console.log(i);
  cubo = Math.pow(i, 3)
  console.log('cubo',cubo);

}

// Manca stampare tutti i numeri come in console...
if(!isNaN(numLimit)){
  output.innerHTML = 
  `
  Stampo il cubo dei primi ${numLimit} numeri <br> Il cubo di ${i-1} è: ${cubo}
  `;
}else{
  output.innerHTML = `Non hai inserito un numero...`;
}




















// const numDispari = [];
// const promptLimit = 6;
// console.log(numDispari);

// const output = document.querySelector('#numero');

// for(i = 0; i < promptLimit; i++){
//   const num = parseInt(prompt('Inserisci un numero'));
//   console.log(num);

//   if(num % 2 !== 0){
//     numDispari.push(num)
//     output.innerHTML = `Tra i numeri che hai inserito questi sono dispari: ${numDispari}`;
//   }else if(num % 2 === 0){
//     output.innerHTML = `Non hai inserito numeri dispari...`;
//   }
// }


