/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const listaInvitati = [
  'simone',
  'giovanni',
  'stefano',
  'guido',
];


const nome = prompt('Inserisci il tuo nome');

const output = document.querySelector('#name');
const gatsby1 = document.querySelector('.gatsby-1');
const gatsby2 = document.querySelector('.gatsby-2');

// di dafault stabilisco che il mio nome non sia presnte
let nomePresente = false;

// controllo che sia nella lista degli invitati
// cerco il nome digitato dentro l'array listaInvitati
for (i = 0; i < listaInvitati.length; i++){
  if(nome === listaInvitati[i]){
    nomePresente = true;
  }
}

// Stampo il messaggio in base al risultato
if(nomePresente){
  output.innerHTML = `${nome} sei invitato alla festa de Il Grande Gatsby!`;
  gatsby1.classList.add('active');
}else{
  output.innerHTML = `${nome} mi spiace, non sei stato invitato alla festa...`;
  gatsby2.classList.add('active');
}

