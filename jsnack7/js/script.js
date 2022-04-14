/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/


const container = document.querySelector('.gb-container');

const limit = 1000;

for (let i = 2; i <= limit; i *= 2){

  // creo l'elemento da aggiungere
  const boxElement = document.createElement('div');
  // gli scrivo la classe
  boxElement.className = 'num-box';
  // aggiungo il contenuto 
  boxElement.append(i);
  
  // stampo in console per vederlo
  console.log(boxElement);
  console.log(i);
  
  container.append(boxElement);
}
