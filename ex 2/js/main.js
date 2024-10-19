//!Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//!RACCOLTA DATI

let i = 0;
let min = 1;
let max = 6;

//genero un numero casuale da 1 a 6 per l'utente
const casualNumberUser = Math.floor(Math.random() * 6) + 1;
console.log("Il tuo numero è " + casualNumberUser);

//genero un numero casuale da 1 a 6 per il computer
const casualNumberComputer = Math.floor(Math.random() * 6) + 1;
console.log("Il numero del computer è " + casualNumberComputer);

alert(
	"Il tuo numero è " +
		casualNumberUser +
		", il numero del computer è " +
		casualNumberComputer
);

//!ELABORAZIONE
//stabilisco quale dei 2 numeri è maggiore e quindi chi vince
let outputext;
//SE numero casuale utente > numero casuale computer
if (casualNumberUser > casualNumberComputer) {
	outputext = "Complimenti, hai vinto!";
	//SE numero casuale utente < numero casuale computer
} else if (casualNumberUser < casualNumberComputer) {
	outputext = "Mi dispiace, hai perso!";
	//SE numero casuale utente = numero casuale computer
} else if (casualNumberUser === casualNumberComputer) {
	outputext = "Pareggio!";
}

console.log(outputext);
alert(outputext);
