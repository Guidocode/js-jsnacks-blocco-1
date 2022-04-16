/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/


const output = document.querySelector('#message-output');

const num = prompt('Inserisci un numero di 4 cifre');


let somma = 0;

for(i = 0; i < num.length; i++){

  console.log(num.charAt(i));

  somma += parseInt(num.charAt(i));

}


console.log('Hai inserito il numero', num, 'e ha', i, 'cifre');
console.log('La somma è ', somma);

const johnNash = document.querySelector('.john-nash');

if(isNaN(num)){
  output.innerHTML = `Non hai inserito un numero...`;
  johnNash.classList.add('active');
}else if (num.length === 4){
  output.innerHTML = `Hai inserito il numero ${num} <br> La somma delle cifre è = ${somma}`;
}else{
  output.innerHTML = `Non hai inserito un numero di 4 cifre...`;
  johnNash.classList.add('active');
}
