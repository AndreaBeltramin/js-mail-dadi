//!Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//!RACCOLTA DATI

let i = 0;
let min = 1;
let max = 6;

//genero un numero casuale da 1 a 6 per l'utente
let casualNumberUser = Math.floor(Math.random() * 6) + 1;
console.log("Il tuo numero è " + casualNumberUser);

//genero un numero casuale da 1 a 6 per il computer
let casualNumberComputer = Math.floor(Math.random() * 6) + 1;
console.log("Il numero del computer è " + casualNumberComputer);

//!ELABORAZIONE
//stabilisco quale dei 2 numeri è maggiore e quindi chi vince

if (casualNumberUser > casualNumberComputer) {
	console.log("Complimenti, hai vinto!!");
	alert("Complimenti, hai vinto!!");
} else if (casualNumberUser < casualNumberComputer) {
	console.log("Mi dispiace, hai perso!!");
	alert("Mi dispiace, hai perso!!");
} else if (casualNumberUser === casualNumberComputer) {
	console.log("Pareggio!!");
	alert("Pareggio!!");
}
