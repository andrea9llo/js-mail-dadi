// Gioco dei dadi, chi fa di più vince

// dichiaro le variabili
var numeroUtente, numeroComp ;

// creo un alert per iniziare il gioco
alert("Clicca per lanciare i dadi");

// dichiaro la funzione per generare un numero random da 1 a 6
// numeroUtente = getRndInteger(1,6);
// numeroComp = getRndInteger(1,6);
//
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// console.log(numeroComp,numeroUtente);
// dichiaro le variabili dei dadi cosi da far uscire  un numero da 1 a 6
numeroUtente = Math.floor(Math.random() * 6) + 1;
numeroComp =  Math.floor(Math.random() * 6) + 1;

// dichiaro la condizione per sapere chi vince

if (numeroUtente > numeroComp) {
  // console.log("tuo numero " + numeroUtente + " numero computer " + numeroComp + " hai vinto");
  document.getElementById('game-dadi').innerHTML = "Il tuo numero è: " + numeroUtente + "...il numero del computer è: " + numeroComp + "...HAI VINTO";
} else if (numeroUtente < numeroComp) {
    // console.log("tuo numero " + numeroUtente + " numero computer " + numeroComp + " hai perso");
    document.getElementById('game-dadi').innerHTML = "Il tuo numero è: " + numeroUtente + "...il numero del computer è: " + numeroComp + "...HAI PERSO";
} else {
  // console.log("tuo numero " + numeroUtente + " numero computer " + numeroComp + " pareggio");
  document.getElementById('game-dadi').innerHTML = "Il tuo numero è: " + numeroUtente + "...il numero del computer è: " + numeroComp + "...PAREGGIO";
}
