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

