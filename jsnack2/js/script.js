/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/


const p1 = prompt('Inserisci una parola');
const p2 = prompt('Inserisci un\'altra parola');


// const p1 = 'parolacorta';
// const p2 = 'parolapiulunga';

const output = document.querySelector('#parole');


console.log(p1, p1.length);
console.log(p2, p2.length);

console.log(output);

let parolaCorta;
let parolaPiuLunga;

if((p1.length) < (p2.length)){
  parolaCorta = p1
  parolaPiuLunga = p2
  output.innerHTML = `La parola più corta è: ${parolaCorta}. <br> Quella più lunga è: ${parolaPiuLunga}.`
}else if((p1.length) > (p2.length)){
  parolaCorta = p2
  parolaPiuLunga = p1
  output.innerHTML = `La parola più corta è: ${parolaCorta}. <br> Quella più lunga è: ${parolaPiuLunga}.`
}else{
  parolaCorta = p1
  parolaPiuLunga = p2
  output.innerHTML = `Le parole hanno la stessa lunghezza: <br> ${parolaCorta} <br> ${parolaPiuLunga}`
}

















// const n1 = 5;
// const n2 = 8;

// const n1 = parseInt(prompt('Inserisci un numero'));
// const n2 = parseInt(prompt('Inserisci un altro numero'));


// const output = document.querySelector('#num-maggiore');
// console.log(output);

// console.log(n1);
// console.log(n2);

// let nMaggiore;

// if(n1 > n2){
//   nMaggiore = n1;
// }else if(n1 < n2){
//   nMaggiore = n2;
// }else{
//   nMaggiore = 'I numeri sono uguali'
// }

// if(isNaN(n1) || (isNaN(n2))){
//   output.innerHTML = 'Non hai inserito un numero...';
// }else{
//   output.innerHTML = `Il numero maggiore è: ${nMaggiore}`; 
// }
