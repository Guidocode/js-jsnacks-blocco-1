/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/


const numeri = [1,2,3,4,5,6,7,8,9,10];

const output = document.querySelector('#message-output');


let somma = 0;

let media;

for(i = 0; i < numeri.length; i++){

  somma += numeri[i];

  media = somma / 10; 
}

console.log('La somma è ', somma);
console.log('La media è ', media);

output.innerHTML = `Somma = ${somma} <br> Media = ${media}`;

