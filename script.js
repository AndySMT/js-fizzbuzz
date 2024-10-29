/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 */

"use strict";
console.clear();
let i; //i = index/indice/contatore
const nValue = 100;

for (let i = 1; i <= nValue; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i + " " + "FizzBuzz");
  } else if (i % 5 === 0) {
    console.log(i + " " + "Buzz");
  } else if (i % 3 === 0) {
    console.log(i + " " + "Fizz");
  } else {
    console.log(`${i} Non e divisibile per nessuno dei casi precedenti`);
  }
}
