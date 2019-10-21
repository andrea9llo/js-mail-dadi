// Chiedi all’utente la sua email controlla che sia
// nella lista di chi può accedere e stampa un
// messaggio appropriato

// dichiaro le variabili
var email, partecipanti, trovato;

// chiedo all utente la propria email
email = prompt("inserire la vostra email");
// console.log(email);

// email dei partecipanti alla festa
partecipanti =["andrea@gmail.com","chiara@gmail.com","giulio@gmail.com"];
// console.log(partecipanti);

// var falsa che mi aiuta a trovare i partecipanti
trovato = false;

// ciclo for per i partecipanti
for (var i = 0; i < partecipanti.length; i++) {
  // console.log(partecipanti[i], i);
  if (email == partecipanti[i]) {
    trovato = true;
    // console.log("sei invitato",i,trovato);
  }
}

// dichiaro una condizione per sapere se uno è invitato o no
if (trovato == true) {
  document.getElementById('mioid').innerHTML = email + " sei invitato alla festa"
  // console.log("Sei invitato alla festa");
} else {
  document.getElementById('mioid').innerHTML = email + " non sei invitato alla festa"
  // console.log("Non sei invitato alla festa");
}
